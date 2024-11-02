import {Component, Input} from '@angular/core';
import {TranslateModule} from "@ngx-translate/core";
import {DatePipe} from "@angular/common";
import {FeatherModule} from "angular-feather";

@Component({
  selector: 'app-cv-header',
  standalone: true,
  imports: [
    TranslateModule,
    DatePipe,
    FeatherModule
  ],
  templateUrl: './cv-header.component.html',
  styleUrl: './cv-header.component.sass'
})
export class CvHeaderComponent {
  @Input() personalInformation: any;
  @Input() photo: string = '';
}
