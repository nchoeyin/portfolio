import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  template: `
  <footer class="flex flex-col gap-10 my-10">
  <nav>
    <div class="">
      <ul class="flex gap-5 justify-center">
        <li><a class="text-3xl text-black hover:text-gray-200" href="#experience">Experience</a></li>
        <li><a class="text-3xl text-black hover:text-gray-200" href="#experience">Skills</a></li>
        <li><a class="text-3xl text-black hover:text-gray-200" href="#projects">Projects</a></li>
        <li><a class="text-3xl text-black hover:text-gray-200" href="#contact">Contact</a></li>
      </ul>
    </div>
  </nav>
  <p class="text-center text-xl text-black mb-10">Copyright &#169; 2024 Ngawang Choeying. All Rights Reserved.</p>
</footer>
  `,
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

}
