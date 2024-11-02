import { Component } from '@angular/core';

import CV from '../../../../public/jsonCV/cvES.json';
import Books from '../../../../public/jsonCV/booksES.json';
import Courses from '../../../../public/jsonCV/coursesES.json';

import { Book } from "../../core/models/Book";
import { Course } from "../../core/models/Course";
import { TranslateModule } from "@ngx-translate/core";
import { CvSectionComponent } from "../../components/cv-section/cv-section.component";
import { CvHeaderComponent } from "../../components/cv-header/cv-header.component";

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [
    TranslateModule,
    CvSectionComponent,
    CvHeaderComponent
  ],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.sass'
})
export class CvComponent {
  cv: any = CV;
  books: Book[] = Books;
  courses: Course[] = Courses;

  sections: any = [
    {name: 'educationTrainings', items: this.cv.profile.educationTrainings},
    {name: 'complementaryTrainings', items: this.courses},
    {name: 'mypublications', items: this.books},
    {name: 'workExperiences', items: this.cv.profile.workExperiences},
    {name: 'organisationalSkills', items: this.cv.profile.organisationalSkills}
  ];
}