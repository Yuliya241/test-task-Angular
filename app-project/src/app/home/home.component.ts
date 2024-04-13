import { Component } from '@angular/core';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  isShown = false;

  isDisabled = false;

  iconDedinition: IconProp | undefined;

  min = 0;

  max = 524;

  public getRandomNum(min: number, max: number): number {
    this.min = min;
    this.max = max;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  public showIcon(): void {
    setTimeout(() => {
      this.isDisabled = false;
      this.isShown = true;
      const randomNum = this.getRandomNum(this.min, this.max);
      const findIconDefinition = Object.entries(fab)[randomNum][1];
      this.iconDedinition = findIconDefinition;
    }, 3000);

    this.isDisabled = true;
    this.isShown = false;
  }
}
