import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-intro-card',
  standalone: true,
  imports: [RouterLink],
  template: `
  <div class="w-full bg-white h-[60vh] flex flex-col justify-center items-center mt-2 mb-4 lg:mt-1 lg:mb-5">
    <section class="w-10/12 flex gap-5 lg:gap-20 justify-center items-center">
        <div class="lg:p-5 justify-center items-center">
            <img class="rounded-full w-[55vw]" src="https://avatars.githubusercontent.com/u/77958773?v=4" alt="Ngawang Choeying profile picture" />
        </div>
        <div class="w-full h-full text-xl flex flex-col justify-center items-center lg:p-5 gap-3 lg:gap-5">
            <p class="text-sm text-center lg:text-2xl">Hello, This is your full-stack developer speaking
            <h1 class="text-md text-center sm:text-3xl md:text-4xl text-black">Ngawang Choeying</h1>
            <p class="text-md text-center lg:text-4xl font-medium ">Call sign: sicario4l
            <!-- <section class="flex gap-5">
                <button class="text-black font-bold p-5 border rounded-full" onclick="window.open('./assets/resume-example.pdf')">
                    Download CV
                </button>
                <button class="text-black font-bold p-5 border rounded-full" onclick="location.href='./#contact'">
                    Contact Info
                </button>
            </section> -->
            <section class="flex gap-5">
            <p class="p-3 lg:p-5 text-3xl lg:text-5xl hover:bg-gray-200 border rounded-lg" (click)="openPortfolio('https://github.com/nchoeyin/Django_CRUD_form')"><i class="fa-brands fa-square-github fa-lg" style="color: #000000;"></i></p>
            <p class="p-3 lg:p-5 text-3xl lg:text-5xl hover:bg-gray-200 border rounded-lg" (click)="openPortfolio('https://www.linkedin.com/in/ngawang-choeying-4b93681ba/')"><i class="fa-brands fa-linkedin fa-lg" style="color: #0077b5;"></i></p>
            </section>
        </div>
    </section>
</div>



  `,
  styleUrl: './intro-card.component.scss'
})
export class IntroCardComponent {
  openPortfolio(url:string) {
    window.open(url, '_blank');
  }
}
