import { Component } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';
@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [NgTemplateOutlet],
  template:`
  <section id="skills" class="flex flex-col justify-center gap-5 my-10 p-5">
  <ng-container *ngTemplateOutlet="skills"></ng-container>
    <ng-template #skills class="flex justify-center">
      <section class="flex flex-col gap-5 my-5">
        <h1 class="text-bold text-5xl text-black text-center">Skills :</h1>
        <p class="text-xl text-center text-black">Decreasing proficiency from top to bottom</p>
      </section>
      <section class="flex gap-5">
        <section class="border border-black rounded-3xl w-7/12 p-5 flex flex-col gap-10 justify-center items-center">
          <h2 class="text-black text-3xl font-bold text-center flex items-center">Frontend Development &nbsp;<span class="material-symbols-outlined text-5xl font-medium text-black">code</span></h2> 
          <section class="flex gap-5 flex-col pl-10">
            <p class="text-black text-2xl">&bull; &nbsp;Angular</p>
            <p class="text-black text-2xl">&bull; &nbsp;Tailwind CSS</p>
            <p class="text-black text-2xl">&bull; &nbsp;Javascript</p>
            <p class="text-black text-2xl"> &bull; &nbsp;HTML</p>
            <p class="text-black text-2xl">&bull; &nbsp;CSS</p>
            <p class="text-black text-2xl">&bull; &nbsp;React Js</p>
          </section>
        </section>

        <section class="border border-black rounded-3xl w-7/12 p-5 flex flex-col gap-10 justify-center items-center">
          <!-- <div class="flex justify-center">
              <span class="material-symbols-outlined text-7xl text-black">code</span>
            </div> -->
          <h2 class="text-black text-3xl font-bold text-center flex items-center">Backend Development &nbsp;<span class="material-symbols-outlined text-5xl font-medium text-black">deployed_code</span></h2> 
          <section class="flex gap-5 flex-col pl-10">
            <p class="text-black text-2xl">&bull; &nbsp;Django</p>
            <p class="text-black text-2xl">&bull; &nbsp;Python</p>
            <p class="text-black text-2xl">&bull; &nbsp;Java</p>
            <p class="text-black text-2xl">&bull; &nbsp;Firebase</p>
            <p class="text-black text-2xl">&bull; &nbsp;Django REST framework</p>
            <p class="text-black text-2xl"> &bull; &nbsp;aiohttp</p>
          </section>
        </section>  
      </section>
      <section class="flex h-full w-full justify-center mt-5">
        <section class="border border-black rounded-3xl w-7/12 p-5 flex flex-col gap-10 justify-center items-center">
          <h2 class="text-black text-3xl font-bold text-center flex items-center">Database &nbsp;<span class="material-symbols-outlined text-5xl font-medium text-black">database</span></h2> 
          <section class="flex gap-5 flex-col pl-10 mb-20">
            <p class="text-black text-2xl">&bull; &nbsp;PostgreSQL</p>
            <p class="text-black text-2xl">&bull; &nbsp;MySQL</p>
            <p class="text-black text-2xl">&bull; &nbsp;NoSQL</p>
            <p class="text-black text-2xl">&bull; &nbsp;MongoDB</p>
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
