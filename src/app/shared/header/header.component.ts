import { Component } from '@angular/core';
import { IsActiveMatchOptions, Router, RouterLink, RouterLinkActive } from '@angular/router';
import { NameComponent } from '../name/name.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NameComponent, TranslateModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  public routerLinkOptions: IsActiveMatchOptions = {
    matrixParams: 'exact',
    queryParams: 'exact',
    paths: 'exact',
    fragment: 'exact'
  }

  activeLanguage: string = 'de';

  constructor(private router: Router, private translate: TranslateService) { }

  changeLanguage(language: string): void {
    this.translate.use(language);
    this.activeLanguage = language;
  }
}
