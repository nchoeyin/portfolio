import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-intro-card',
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="w-full bg-white h-[70vh] flex justify-center mt-10 mb-20">
    <section class="w-11/12 flex gap-20 justify-center">
        <div class="p-5 flex justify-center items-center">
            <img class="rounded-full w-[60vw]" src="https://avatars.githubusercontent.com/u/77958773?v=4" alt="Ngawang Choeying profile picture" />
        </div>
        <div class="w-full h-full text-xl flex flex-col justify-center items-center p-5 gap-5">
            <p class="text-2xl">Hello, I'm</p>
            <h1 class="text-3xl md:text-5xl text-black">Ngawang Choeying</h1>
            <p class="text-4xl font-medium ">Full-stack Developer</p>
            <!-- <section class="flex gap-5">
                <button class="text-black font-bold p-5 border rounded-full" onclick="window.open('./assets/resume-example.pdf')">
                    Download CV
                </button>
                <button class="text-black font-bold p-5 border rounded-full" onclick="location.href='./#contact'">
                    Contact Info
                </button>
            </section> -->
            <section class="flex gap-5">
            <a class="p-5 text-5xl hover:bg-gray-200 border rounded-lg" href='https://github.com/nchoeyin/Django_CRUD_form'><i class="fa-brands fa-square-github fa-lg" style="color: #000000;"></i></a>
            <a class="p-5 text-5xl hover:bg-gray-200 border rounded-lg" href='https://www.linkedin.com/in/ngawang-choeying-4b93681ba/'><i class="fa-brands fa-linkedin fa-lg" style="color: #0077b5;"></i></a>
            </section>
        </div>
    </section>
</div>



  `,
  styleUrl: './intro-card.component.scss'
})
export class IntroCardComponent {

}