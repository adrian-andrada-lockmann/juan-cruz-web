import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { SwitchService } from '../services/switch.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  constructor(private modalSS: SwitchService) { }

  ngOnInit(): void {    

  }


  closeModal(){
    this.modalSS.$modal.emit(false)
  }

}
