import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ReelComponent } from './reel/reel.component';
import { TextcontentComponent } from './textcontent/textcontent.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, ReelComponent, TextcontentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'juan-cruz-web';
  slides: any[] = [
    {
      url: 'assets/img/1.jpg',
      title: 'First slide',
      description: 'This is the first slide',
    },
    {
      url: 'https://picsum.photos/200/300',
      title: 'Second slide',
      description: 'This is the second slide',
    },
    {
      url: 'https://picsum.photos/200/300',
      title: 'Third slide',
      description: 'This is the third slide',
    },
    {
      url: 'https://picsum.photos/200/300',
      title: 'Fourth slide',
      description: 'This is the fourth slide',
    },
    {
      url: 'https://picsum.photos/200/300',
      title: 'Fifth slide',
      description: 'This is the fifth slide',
    },
  ];
}
