import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { TextcontentComponent } from './textcontent/textcontent.component';
import { SliderappComponent } from './sliderapp/sliderapp.component';
import { InfoComponent } from './header/info/info.component';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent,InfoComponent, TextcontentComponent, SliderappComponent ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
    
  }
  title = 'juan-cruz-web';

  slides: any[] = [
    {
      url: 'assets/img/bancorojo.png',
      title: 'Banco Rojo',
      description: 'Banco Rojo',
    },
    {
      url: 'assets/img/bancorojo2.png',
      title: 'Banco Rojo 2',
      description: 'Banco Rojo 2',
    },
    {
      url: 'assets/img/bancorojo3.png',
      title: 'Banco Rojo 3',
      description: 'Banco Rojo 3',
    },
  ];
}
