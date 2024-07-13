import { Component } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgTemplateOutlet],
  template:`
  <section id="skills" class="flex flex-col justify-center gap-5 my-10 p-2 lg:p-5">
  <ng-container *ngTemplateOutlet="skills"></ng-container>
    <ng-template #skills class="flex flex-col justify-center items-center">
      <section class="flex flex-col gap-5 lg:my-5">
        <h1 class="text-bold text-lg lg:text-5xl text-black text-center">Skills :</h1>
        <p class="text-sm lg:text-xl text-center text-black">Decreasing proficiency from top to bottom</p>
      </section>
      <section class="flex flex-col lg:flex-row gap-10">
        <section class="border border-black rounded-3xl lg:w-7/12 p-2 lg:p-5 flex flex-col gap-4 lg:gap-10 justify-center items-center">
          <h2 class="text-black text-md lg:text-3xl font-bold text-center flex items-center">Frontend Development &nbsp;<span class="material-symbols-outlined text-md lg:text-5xl font-extralight text-black">code</span></h2> 
          <section class="flex gap-2 lg:gap-5 flex-col pl-10">
            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;Angular</p>
            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;Tailwind CSS</p>
            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;Javascript</p>
            <p class="text-black text-sm lg:text-2xl"> &bull; &nbsp;HTML</p>
            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;CSS</p>
            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;React Js</p>
          </section>
        </section>

        <section class="border border-black rounded-3xl lg:w-7/12 p-2 lg:p-5 flex flex-col gap-4 lg:gap-10 justify-center items-center">
          <!-- <div class="flex justify-center">
              <span class="material-symbols-outlined text-7xl text-black">code</span>
            </div> -->
          <h2 class="text-black text-md lg:text-3xl font-bold text-center flex items-center">Backend Development &nbsp;<span class="material-symbols-outlined text-md lg:text-5xl font-extralight text-black">deployed_code</span></h2> 
          <section class="flex gap-2 lg:gap-5 flex-col pl-10">
            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;Django</p>
            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;Python</p>
            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;Java</p>
            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;Firebase</p>
            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;Django REST framework</p>
            <p class="text-black text-sm lg:text-2xl"> &bull; &nbsp;aiohttp</p>
          </section>
        </section>  
      </section>
      <section class="flex w-full justify-center">
        <section class="flex flex-col border border-black rounded-3xl w-full lg:w-7/12 p-2 lg:p-5 gap-4 lg:gap-10 justify-center items-center mt-5">
          <h2 class="text-black text-md lg:text-3xl font-bold text-center flex items-center">Database &nbsp;<span class="material-symbols-outlined text-md lg:text-5xl font-extralight text-black">database</span></h2> 
          <section class="flex gap-2 lg:gap-5 flex-col pl-10 mb-20">
            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;PostgreSQL</p>
            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;MySQL</p>
            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;NoSQL</p>
            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;MongoDB</p>
          </section>
        </section>
    </section> 
    </ng-template>
  </section>  
  `,
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
