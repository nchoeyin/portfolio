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
marqueePayload = [
  {'character':'Maverick','quotes':"It's not the plane, it's the pilot.",'icon':'ph-airplane-in-flight'},
  {'character':'Iceman','quotes':"The plaque for the alternates is down in the ladies' room.",'icon':'ph-airplane-takeoff'},
  {'character':'Goose','quotes':"Great balls of fire!",'icon':'ph-airplane-in-flight'},
  {'character':'Viper','quotes':"There are no points for second place.",'icon':'ph-airplane-tilt'},
  {'character':'BOB','quotes':"It’s actually just Bob",'icon':'ph-airplane'},
  {'character':'Rooster','quotes':"Talk to me, Dad.",'icon':'ph-airplane-landing'},
  {'character':'Hangman','quotes':"They don’t call it the ‘hard deck’ for nothing.",'icon':'ph-airplane-in-flight'},
  {'character':'Maverick','quotes':"I feel the need... the need for speed!",'icon':'ph-airplane-in-flight'}
]
}
