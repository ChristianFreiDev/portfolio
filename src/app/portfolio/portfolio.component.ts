import { Component } from '@angular/core';
import { ProjectComponent } from './project/project.component';
import { UseScrollAnimationDirective } from '../directives/use-scroll-animation.directive';
import { TranslateModule } from '@ngx-translate/core';

@Component({
    selector: 'app-portfolio',
    imports: [ProjectComponent, UseScrollAnimationDirective, TranslateModule],
    templateUrl: './portfolio.component.html',
    styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {

}
