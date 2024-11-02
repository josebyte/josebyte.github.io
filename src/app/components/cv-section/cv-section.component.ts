import { Component, Input } from '@angular/core';
import {DatePipe} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-cv-section',
  standalone: true,
  imports: [
    DatePipe,
    TranslateModule
  ],
  templateUrl: './cv-section.component.html',
  styleUrl: './cv-section.component.sass'
})
export class CvSectionComponent {
  @Input() section: any;

  getContent(item: any){
    if(item.description || item.mainActivities){
      let content = item.description ? item.description : item.mainActivities;
      // Replace <ol> with <ul>, </ol> with </ul>, and remove <br> tags
      content = content.replace(/<ol>/g, "<ul>")
        .replace(/<\/ol>/g, "</ul>")
        .replace(/<br\s*\/?>/g, ""); // Handles <br> and <br />

      return content;
    }
    return '';
  }

  getErrorImage(event: any){
    event.target.src='/images/no-img.png';
  }
}
