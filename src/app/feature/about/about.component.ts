import { Component } from '@angular/core';
import { AccordionCardComponent } from '../../components/accordion-card/accordion-card.component';
@Component({
  selector: 'app-about',
  standalone: true,
  imports: [AccordionCardComponent],
  template: `
  <section id="experience" class="h-full w-full flex-col gap-10">
    <section class="flex flex-col gap-3">
      <p class=" text-md lg:text-xl text-center">Get To Know More</p>
      <h1 class="text-sm text-bold lg:text-5xl text-black text-center">About Me</h1>
    </section>
    <section class="flex flex-col gap-2  lg:mt-10">
    <!-- <app-info-card [header]="header" [desc]="desc"></app-info-card> -->
    <section class="flex flex-col lg:flex-row gap-10 p-5 justify-center">
      <section #experience class="border border-black rounded-3xl lg:w-7/12 p-2 lg:p-5 flex flex-col gap-4 lg:gap-12 justify-center">
        <div class="flex justify-center">
          <span class="material-symbols-outlined text-3xl lg:text-7xl text-black">editor_choice</span>
        </div>
        <h2 class="text-black text-md lg:text-5xl font-bold text-center">Experience</h2>  
        <!-- <section class="flex gap-2 flex-col">
          <section class="flex gap-2">
            <p class="text-black text-xl">Prosaf Appzenith Solutions</p>
            <span class="text-black text-xl"> | </span>
            <p class="text-black text-xl">Automation testing</p>
          </section>
          <p class="text-black text-xl">1st Sept - 30th Sept, 2021</p>
        </section> -->
        <section class="flex gap-2 flex-col">
          <section class="flex gap-2 justify-center">
            <p class="text-black text-sm lg:text-2xl font-semibold">Emplay</p>
            <span class="text-black text-sm lg:text-2xl"> | </span>
            <p class="text-black text-sm lg:text-xl">Full stack Developer</p>
          </section>
          <p class="text-black text-sm lg:text-xl text-center">16th Aug, 2023 - present</p>
        </section>
        <section class="flex gap-2 flex-col">
          <section class="flex gap-2 justify-center">
            <p class="text-black text-sm lg:text-2xl font-semibold">Emplay</p>
            <span class="text-black text-sm lg:text-2xl"> | </span>
            <p class="text-black text-sm lg:text-xl">Full stack developer Intern</p>
          </section>
          <p class="text-black text-sm lg:text-xl text-center">16th Feb - 16th Aug, 2023</p>
        </section>
        <section class="flex gap-2 flex-col text-center">
          <section class="flex gap-2 justify-center">
            <p class="text-black text-sm lg:text-2xl font-semibold">ATEU softwares</p>
            <span class="text-black text-sm lg:text-2xl"> | </span>
            <p class="text-black text-sm lg:text-xl">Backend Intern</p>
          </section>
          <p class="text-black text-sm lg:text-xl text-center">19th Sept - 20th Oct, 2022</p>
        </section>
      </section>

      <section #education class="border border-black text-center rounded-3xl lg:w-7/12 p-2 lg:p-5 flex flex-col gap-5 lg:gap-12 justify-center">
        <div class="flex justify-center">
          <span class="material-symbols-outlined text-3xl lg:text-7xl text-black">school</span>
        </div>
        <h2 class="text-black text-md lg:text-5xl font-bold text-center">Education</h2> 
        <!-- <section class="flex-col gap-5"> -->
          <section class="flex gap-2 flex-col">
            <p class="text-black text-sm lg:text-2xl font-semibold">Maharaja Institute of Technology, Mysore</p>
            <p class="text-black text-sm lg:text-xl">Bachelor of Engineering, Computer Science</p>
            <p class="text-black text-sm lg:text-xl">13th Aug, 2019 - 13th Aug, 2023</p>
          </section>
          <section class="flex gap-2 flex-col">
            <p class="text-black text-sm lg:text-2xl font-semibold">St. Joseph's Academy, Dehradun</p>
            <p class="text-black text-sm lg:text-xl">PCM + Computer applications</p>
            <p class="text-black text-sm lg:text-xl">14th July, 2011 - 30th March, 2019</p>
          </section>
        <!-- </section>  -->
      </section>
    </section>
    </section>
  </section>

  `,
  styleUrl: './about.component.scss'
})
export class AboutComponent {
header = 'Experience';
desc = "Emplay";
}
