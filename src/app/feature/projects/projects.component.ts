import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  template: `
  <section id="projects" class="flex flex-col w-full justify-center">
    <section class="flex flex-col w-full gap-5">
      <section class="flex flex-col gap-5 my-5">
          <h1 class="text-bold text-md lg:text-5xl text-black text-center">Browse My Recent</h1>
          <p class="text-md lg:text-xl text-center text-black">Projects</p>
      </section>
      <section class="flex flex-col lg:flex-row justify-center gap-10 lg:gap-10 my-5 lg:my-10">
        <section class="border border-black rounded-3xl lg:w-7/12 p-5 flex flex-col gap-4 lg:gap-10 justify-center items-center lg:mt-5">
          <h2 class="text-black text-md lg:text-3xl font-semibold text-center flex items-center">Seray news application</h2> 
          <section class="flex gap-2 lg:gap-5 flex-col pl-2 lg:pl-2">
            <section class="flex gap-5">
              <span class="text-black text-md lg:text-2xl mb-5">&bull;</span>
              <p class="text-black text-md lg:text-lg">It scrapes news from website and makes it available for users.</p>
            </section>
            <section class="flex gap-5">
              <span class="text-black text-md lg:text-2xl mb-5">&bull;</span>
              <p class="text-black text-md lg:text-lg">A django application built with angular and django.</p>
            </section>
            <section class="flex gap-5">
              <span class="text-black text-md lg:text-2xl mb-5">&bull;</span>
              <p class="text-black text-md lg:text-lg">Share, download and copy functionalities</p>
            </section>
          </section>
        </section>

        <section class="border border-black rounded-3xl lg:w-7/12 p-5 flex flex-col gap-4 lg:gap-10 justify-center items-center lg:mt-5">
          <h2 class="text-black text-md lg:text-3xl font-semibold text-center flex items-center">Suttras.com</h2> 
          <section class="flex gap-2 lg:gap-5 flex-col pl-2 lg:pl-2">
            <section class="flex gap-5">
              <span class="text-black text-md lg:text-2xl mb-5">&bull;</span>
              <p class="text-black text-md lg:text-lg">A hosted responsive blog website for Tibetan buddhist scriptures</p>
            </section>
            <section class="flex gap-5">
              <span class="text-black text-md lg:text-2xl mb-5">&bull;</span>
              <p class="text-black text-md lg:text-lg">Extensive use of new angular features like signals and tailwind css</p>
            </section>
            <section class="flex gap-5">
              <span class="text-black text-md lg:text-2xl mb-5">&bull;</span>
              <p class="text-black text-md lg:text-lg">Deployed it using vercel and cloudflare</p>
            </section>
          </section>
        </section>

        <section class="border border-black rounded-3xl lg:w-7/12 p-5 flex flex-col gap-4 lg:gap-10 justify-center items-center lg:mt-5">
          <h2 class="text-black text-md lg:text-3xl font-semibold text-center flex items-center">chatbot app</h2> 
          <section class="flex gap-2 lg:gap-5 flex-col pl-2 lg:pl-2">
            <section class="flex gap-5">
              <span class="text-black text-md lg:text-2xl mb-5">&bull;</span>
              <p class="text-black text-md lg:text-lg">chat bot app uses user's knowledge base</p>
            </section>
            <section class="flex gap-5">
              <span class="text-black text-md lg:text-2xl mb-5">&bull;</span>
              <p class="text-black text-md lg:text-lg">used daisy ui library to implement chat funtionality</p>
            </section>
            <section class="flex gap-5">
              <span class="text-black text-md lg:text-2xl mb-5">&bull;</span>
              <p class="text-black text-md lg:text-lg">Backend is implemented in Django</p>
            </section>
          </section>
        </section>
      </section>
    </section>
  </section>
  `,
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
