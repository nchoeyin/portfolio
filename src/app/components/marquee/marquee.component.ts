import { Component } from '@angular/core';
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [
    NgIf,
  ],
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss'
})
export class MarqueeComponent {

}
