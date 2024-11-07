import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cv-badge',
  standalone: true,
  imports: [],
  templateUrl: './cv-badge.component.html',
  styleUrl: './cv-badge.component.sass'
})
export class CvBadgeComponent {
  @Input() badge: any;
}
