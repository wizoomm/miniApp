import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { Header } from '../../components/header/header';
import { MenuItem, MenuSection, SECTIONS } from '../../data/menu-data';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterLink, Header],
  templateUrl: './menu.html',
  styleUrl: './menu.css',
})
export class Menu {
  readonly sections: MenuSection[] = SECTIONS;

  currentSectionId: MenuSection['id'] = 'type1';

  private selectedBySection = new Map<MenuSection['id'], Set<string>>([
    ['type1', new Set<string>()],
    ['type2', new Set<string>()],
  ]);

  get currentSection(): MenuSection {
    return this.sections.find((s) => s.id === this.currentSectionId)!;
  }

  setSection(id: MenuSection['id']) {
    this.currentSectionId = id;
  }

  get items(): MenuItem[] {
    return this.currentSection.items;
  }

  isSelected(itemId: string): boolean {
    return this.selectedBySection.get(this.currentSectionId)!.has(itemId);
  }

  toggle(item: MenuItem, checked: boolean) {
    const set = this.selectedBySection.get(this.currentSectionId)!;
    if (checked) set.add(item.id);
    else set.delete(item.id);
  }

  get selectedCount(): number {
    return this.selectedBySection.get(this.currentSectionId)!.size;
  }

  get selectedTotal(): number {
    const set = this.selectedBySection.get(this.currentSectionId)!;
    let sum = 0;
    for (const item of this.items) {
      if (set.has(item.id)) sum += item.value;
    }
    return sum;
  }
}