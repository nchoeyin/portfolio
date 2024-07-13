import { Component } from '@angular/core';
import { CommonModule, NgIf } from '@angular/common';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, NgIf],
  template: `
  <section id="navbar" class="flex justify-between h-40 items-center bg-white">
    <div class="text-md sm:text-3xl md:text-4xl text-black text-center font-sm">Ngawang Choeying</div>
    <span *ngIf="!showMenu"(click)="showMenu =! showMenu" class="material-symbols-outlined text-md sm:text-3xl md:hidden lg:hidden text-black cursor-pointer">menu</span>
    <section class="md:flex gap-6 {{showMenu ? 'block' : 'hidden'}}">
      <div class="text-sm sm:text-lg md:text-2xl lg:text-3xl text-black hover:text-gray-200">
        <a href="#experience">Experience</a>
      </div>
      <div class="text-md sm:text-xl md:text-lg lg:text-3xl text-black hover:text-gray-200">
        <a href="#skills">Skills</a>
      </div>
      <div class="text-md sm:text-xl md:text-lg lg:text-3xl text-black hover:text-gray-200">
        <a href="#projects">Projects</a>
      </div>
      <div class="text-md sm:text-xl md:text-lg lg:text-3xl text-black hover:text-gray-200">
        <a href="#contact">Contact</a>
      </div>
    </section>
    <span *ngIf="showMenu"(click)="showMenu =! showMenu" class="material-symbols-outlined text-md sm:text-3xl md:hidden lg:hidden text-black cursor-pointer">clear</span>
</section>

  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
showMenu = false;
}
