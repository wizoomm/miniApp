import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  @Input({ required: true }) sectionTitle!: string;
  @Input({ required: true }) selectedCount!: number;
  @Input({ required: true }) selectedTotal!: number;
}
