import { Component } from '@angular/core';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import CV from '../../../../../public/jsonCV/cvES.json';
import {FeatherModule} from "angular-feather";
import {RouterLink, RouterLinkActive} from "@angular/router";
@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [
    TranslateModule,
    FeatherModule,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.sass'
})
export class NavigationComponent {
  cv: any;

  constructor(
    public translate: TranslateService
  ) {
    this.cv = CV;
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
  }

}
