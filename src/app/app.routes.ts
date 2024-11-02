import { Routes } from '@angular/router';
import { CvComponent } from "./containers/cv/cv.component";
import { RecommendationLetterComponent } from "./containers/recommendation-letter/recommendation-letter.component";

export const routes: Routes = [
  {
    path: '', redirectTo: '/cv', pathMatch: 'full'
  },
  {
    path: 'cv',
    component: CvComponent
    //canActivateChild: [AuthGuardLogged]
  },
  {
    path: 'letters',
    component: RecommendationLetterComponent
    //canActivateChild: [AuthGuardLogged]
  }
];
