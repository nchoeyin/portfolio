import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  template: `
  <section id="navbar" class="flex justify-between flex-col-1 h-40 items-center bg-white">
    <div class="text-5xl text-black font-sm">Ngawang Choeying</div>
    <section class="flex gap-6">
      <div class="text-3xl text-black hover:text-gray-200">
        <a href="#experience">Experience</a>
      </div>
      <div class="text-3xl text-black hover:text-gray-200">
        <a href="#skills">Skills</a>
      </div>
      <div class="text-3xl text-black hover:text-gray-200">
        <a href="#projects">Projects</a>
      </div>
      <div class="text-3xl text-black hover:text-gray-200">
        <a href="#contact">Contact</a>
      </div>
    </section>
</section>


  `,
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

}
