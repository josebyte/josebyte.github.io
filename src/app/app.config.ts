import { ApplicationConfig, importProvidersFrom, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

//Translation and locale
import {TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient, provideHttpClient, withFetch } from "@angular/common/http";

//Angular Locales:
import localeEs from '@angular/common/locales/es';
import localeEn from '@angular/common/locales/en';
import { registerLocaleData } from "@angular/common";

// Icons:
import { FeatherModule } from 'angular-feather';
import { AtSign, Mail, MapPin, Phone, User, Printer, BookOpen, Briefcase, Clipboard, Download, ThumbsUp, Camera, Heart, Linkedin, Github } from 'angular-feather/icons';


registerLocaleData(localeEs, 'es');
registerLocaleData(localeEn, 'en');

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './i18n/', '.json');
}

const icons = {
  AtSign,
  Mail,
  MapPin,
  Phone,
  User,
  Printer,
  BookOpen,
  Briefcase,
  Clipboard,
  ThumbsUp,
  Download,
  Camera,
  Heart,
  Linkedin,
  Github
};

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideClientHydration(),
    { provide: LOCALE_ID, useValue: 'es'},
    importProvidersFrom(
      FeatherModule.pick(icons),
      TranslateModule.forRoot({
        defaultLanguage: 'es',
        loader: {
          provide: TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [HttpClient],
        },
    })),
  ]
};
