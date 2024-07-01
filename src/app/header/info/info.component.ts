import { Component, OnInit } from '@angular/core';
import { NgIf } from '@angular/common';
import { SwitchService } from '../../services/switch.service';
@Component({
  selector: 'app-info',
  standalone: true,
  imports: [NgIf],
  templateUrl: './info.component.html',
  styleUrl: './info.component.css'
})
export class InfoComponent implements OnInit{
  constructor(private modalSS: SwitchService) { }

  infoModalSwitch: boolean;

  openModal() {
    this.infoModalSwitch = true;
  }

  ngOnInit(): void {
    this.modalSS.$modal.subscribe((valor) => { this.infoModalSwitch = valor })
  }


  closeModal() {
    this.modalSS.$modal.emit(false)
  }

}
