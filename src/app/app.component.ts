import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ReelComponent } from './reel/reel.component';
import { TextcontentComponent } from './textcontent/textcontent.component';
import { SliderappComponent } from './sliderapp/sliderapp.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ReelComponent, TextcontentComponent, SliderappComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'juan-cruz-web';
  slides: any[] = [
    {
      url: 'assets/img/bancorojo.png',
      title: 'First slide',
      description: 'This is the first slide',
    },
    {
      url: 'assets/img/bancorojo2.png',
      title: 'Second slide',
      description: 'This is the second slide',
    },
    {
      url: 'assets/img/bancorojo3.png',
      title: 'Third slide',
      description: 'This is the third slide',
    },
  ];
}
