import { Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ReelComponent } from './reel/reel.component';
import { TextcontentComponent } from './textcontent/textcontent.component';
import { SliderappComponent } from './sliderapp/sliderapp.component';
import { SwitchService } from './services/switch.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ReelComponent, TextcontentComponent, SliderappComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{


  infoModalSwitch:boolean;


  openModal(){
    this.infoModalSwitch = true;
  }

  ngOnInit(): void {
    this.modalSS.$modal.subscribe((valor)=> {this.infoModalSwitch = valor})
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
