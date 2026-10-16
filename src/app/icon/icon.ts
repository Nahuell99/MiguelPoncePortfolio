import { Component, computed, input } from '@angular/core';

const materialIcons = new Set(['faucet', 'bolt', 'fence', 'build', 'home']);

@Component({
  selector: 'app-icon',
  templateUrl: './icon.html',
  styleUrl: './icon.css',
})
export class Icon {
  readonly name = input.required<string>();
  readonly size = input(28);
  readonly isMaterial = computed(() => materialIcons.has(this.name()));
}
