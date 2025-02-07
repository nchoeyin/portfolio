import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgIf],
  template: `
  <section id="navbar" class="flex justify-between h-[17vh] items-center bg-white">
    <div class="text-md sm:text-2xl md:text-3xl text-black text-center font-sm">Ngawang Choeying</div>
    <section class="flex gap-4 items-center">
      <span *ngIf="!showMenu"(click)="showMenu =! showMenu" class="material-symbols-outlined text-md sm:text-3xl md:hidden lg:hidden text-black cursor-pointer">menu</span>
      <section class="md:flex gap-6 {{showMenu ? 'block' : 'hidden'}}">
          <div class="text-xs sm:text-lg lg:text-xl text-black hover:text-gray-200">
            <a href="#experience">Experience</a>
          </div>
          <div class="text-xs sm:text-xl lg:text-xl text-black hover:text-gray-200">
            <a href="#skills">Skills</a>
          </div>
          <div class="text-xs sm:text-xl lg:text-xl text-black hover:text-gray-200">
            <a href="#projects">DaggerProjects</a>
          </div>
          <div class="text-xs sm:text-xl lg:text-xl text-black hover:text-gray-200">
            <a href="#contact">Contact</a>
          </div>
      </section>
      <span *ngIf="showMenu"(click)="showMenu =! showMenu" class="material-symbols-outlined text-md sm:text-3xl md:hidden lg:hidden text-black cursor-pointer">clear</span>
     </section>
    </section>

  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
showMenu = false;
}
