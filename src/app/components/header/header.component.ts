import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
  <section id="navbar" class="flex justify-between h-40 items-center bg-white">
    <div class="hidden text-3xl md:text-4xl lg:text-5xl text-black text-center font-sm">Ngawang Choeying</div>
    <section class="hidden md:flex gap-6">
      <div class="sm:text-xl md:text-2xl lg:text-3xl text-black hover:text-gray-200">
        <a href="#experience">Experience</a>
      </div>
      <div class="sm:text-xl md:text-2xl lg:text-3xl text-black hover:text-gray-200">
        <a href="#skills">Skills</a>
      </div>
      <div class="sm:text-xl md:text-2xl lg:text-3xl text-black hover:text-gray-200">
        <a href="#projects">Projects</a>
      </div>
      <div class="sm:text-xl md:text-2xl lg:text-3xl text-black hover:text-gray-200">
        <a href="#contact">Contact</a>
      </div>
    </section>
</section>


  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
