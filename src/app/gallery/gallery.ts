import { Component, ElementRef, computed, effect, signal, viewChild } from '@angular/core';
import { Service, serviceWhatsapp } from '../site';
import { Icon } from '../icon/icon';

@Component({
  selector: 'app-gallery',
  imports: [Icon],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class Gallery {
  private readonly dialog = viewChild.required<ElementRef<HTMLDialogElement>>('dialog');
  private readonly track = viewChild<ElementRef<HTMLElement>>('track');
  private readonly thumbs = viewChild<ElementRef<HTMLElement>>('thumbs');

  readonly service = signal<Service | null>(null);
  readonly index = signal(0);
  readonly photos = computed(() => this.service()?.photos ?? []);
  readonly total = computed(() => this.photos().length);
  readonly whatsapp = computed(() => {
    const service = this.service();
    return service ? serviceWhatsapp(service) : '';
  });

  /** Arrastre hacia abajo para cerrar (celular). */
  readonly dragY = signal(0);
  readonly dragging = signal(false);
  private dragFrom: number | null = null;

  private scrollFrame = 0;
  /** Mientras el desplazamiento lo hace el código, el scroll no debe pisar el índice. */
  private autoScrolling = false;
  private autoScrollTimer = 0;

  constructor() {
    // Mantener visible la miniatura activa (en el celular la fila se desplaza).
    effect(() => {
      const i = this.index();
      const strip = this.thumbs()?.nativeElement;
      const thumb = strip?.children[i] as HTMLElement | undefined;
      if (!strip || !thumb) return;
      const left = thumb.offsetLeft - (strip.clientWidth - thumb.offsetWidth) / 2;
      strip.scrollTo({ left, behavior: this.reducedMotion() ? 'auto' : 'smooth' });
    });
  }

  open(service: Service, start = 0): void {
    this.service.set(service);
    this.index.set(start);
    this.dragY.set(0);
    const dialog = this.dialog().nativeElement;
    if (!dialog.open) {
      dialog.showModal();
    }
    // Esperar a que se rendericen las fotos del servicio elegido.
    requestAnimationFrame(() => this.go(start, false));
  }

  close(): void {
    this.dialog().nativeElement.close();
  }

  prev(): void {
    this.go(Math.max(0, this.index() - 1));
  }

  next(): void {
    this.go(Math.min(this.total() - 1, this.index() + 1));
  }

  go(i: number, smooth = true): void {
    const track = this.track()?.nativeElement;
    this.index.set(i);
    if (!track) return;
    this.autoScrolling = true;
    clearTimeout(this.autoScrollTimer);
    // Respaldo por si el navegador no emite "scrollend".
    this.autoScrollTimer = window.setTimeout(() => (this.autoScrolling = false), 1000);
    track.scrollTo({
      left: i * track.clientWidth,
      behavior: smooth && !this.reducedMotion() ? 'smooth' : 'auto',
    });
  }

  onScroll(): void {
    if (this.autoScrolling) return;
    cancelAnimationFrame(this.scrollFrame);
    this.scrollFrame = requestAnimationFrame(() => {
      const track = this.track()?.nativeElement;
      if (!track || !track.clientWidth) return;
      const i = Math.round(track.scrollLeft / track.clientWidth);
      if (i !== this.index()) this.index.set(i);
    });
  }

  onScrollEnd(): void {
    this.autoScrolling = false;
    clearTimeout(this.autoScrollTimer);
    this.onScroll();
  }

  dragStart(event: TouchEvent): void {
    this.dragFrom = event.touches[0].clientY;
    this.dragging.set(true);
  }

  dragMove(event: TouchEvent): void {
    if (this.dragFrom === null) return;
    this.dragY.set(Math.max(0, event.touches[0].clientY - this.dragFrom));
  }

  dragEnd(): void {
    if (this.dragFrom === null) return;
    const shouldClose = this.dragY() > 110;
    this.dragFrom = null;
    this.dragging.set(false);
    // Si cierra, sale desde donde quedó; si no, vuelve a su lugar con transición.
    if (shouldClose) this.close();
    else this.dragY.set(0);
  }

  onKeydown(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.next();
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.prev();
    }
  }

  /** Cerrar al tocar el fondo oscuro, fuera del panel. */
  onDialogClick(event: MouseEvent): void {
    const dialog = this.dialog().nativeElement;
    if (event.target !== dialog) return;
    const r = dialog.getBoundingClientRect();
    const inside =
      event.clientX >= r.left && event.clientX <= r.right && event.clientY >= r.top && event.clientY <= r.bottom;
    if (!inside) this.close();
  }

  private reducedMotion(): boolean {
    try {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    } catch {
      return false;
    }
  }
}
