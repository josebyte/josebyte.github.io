import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";

import RecommendationLettersES from '../../../../public/jsonCV/recommendationLettersJosebaES.json';
import RecommendationLettersEN from '../../../../public/jsonCV/recommendationLettersJosebaEN.json';
@Component({
  selector: 'app-recommendation-letter',
  standalone: true,
  imports: [],
  templateUrl: './recommendation-letter.component.html',
  styleUrl: './recommendation-letter.component.sass'
})
export class RecommendationLetterComponent {
  letters: any;

  constructor(private translate: TranslateService) {
    this.letters = this.translate.currentLang === 'EN' ? RecommendationLettersEN : RecommendationLettersES;
  }
}
