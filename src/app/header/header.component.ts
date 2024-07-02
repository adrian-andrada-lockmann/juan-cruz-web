import { Component } from '@angular/core';
import { InfoComponent } from './info/info.component';


@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InfoComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
}
