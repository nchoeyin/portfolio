import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  template: `
  <section id="projects" class="flex flex-col w-full justify-center">
    <section class="flex flex-col w-full">
      <section class="flex flex-col gap-5 my-5">
          <h1 class="text-bold text-5xl text-black text-center">Browse My Recent</h1>
          <p class="text-xl text-center text-black">Projects</p>
      </section>
      <section class="flex justify-center gap-2 my-10">
        <section class="border border-black rounded-3xl w-7/12 p-5 flex flex-col gap-10 justify-center items-center">
          <h2 class="text-black text-3xl font-semibold text-center flex items-center">Seray news application</h2> 
          <section class="flex gap-5 flex-col pl-10">
            <section class="flex gap-5">
              <span class="text-black text-2xl mb-5">&bull;</span>
              <p class="text-black text-2xl">It scrapes news from website and makes it available for users.</p>
            </section>
            <section class="flex gap-5">
              <span class="text-black text-2xl mb-5">&bull;</span>
              <p class="text-black text-2xl">A django application built with angular and django.</p>
            </section>
            <section class="flex gap-5">
              <span class="text-black text-2xl mb-5">&bull;</span>
              <p class="text-black text-2xl">Share, download and copy functionalities</p>
            </section>
          </section>
        </section>

        <section class="border border-black rounded-3xl w-7/12 p-5 flex flex-col gap-5 justify-center items-center">
          <h2 class="text-black text-3xl font-semibold text-center flex items-center">Movie Review application</h2> 
          <section class="flex gap-5 flex-col pl-10">
            <section class="flex gap-5">
              <span class="text-black text-2xl mb-5">&bull;</span>
              <p class="text-black text-2xl">created a MERN application for storing movie title and movie review by users</p>
            </section>
            <section class="flex gap-5">
              <span class="text-black text-2xl mb-5">&bull;</span>
              <p class="text-black text-2xl">Explored and implemented MongoDB and NoSQL</p>
            </section>
            <section class="flex gap-5">
              <span class="text-black text-2xl mb-5">&bull;</span>
              <p class="text-black text-2xl">Implemented middewares using Express and Mongoose</p>
            </section>
          </section>
        </section>

        <section class="border border-black rounded-3xl w-7/12 p-5 flex flex-col gap-10 justify-center items-center">
          <h2 class="text-black text-3xl font-semibold text-center flex items-center">chatbot app</h2> 
          <section class="flex gap-5 flex-col pl-10">
            <section class="flex gap-5">
              <span class="text-black text-2xl mb-5">&bull;</span>
              <p class="text-black text-2xl">chat bot app uses user's knowledge base</p>
            </section>
            <section class="flex gap-5">
              <span class="text-black text-2xl mb-5">&bull;</span>
              <p class="text-black text-2xl">used daisy ui library to implement chat funtionality</p>
            </section>
            <section class="flex gap-5">
              <span class="text-black text-2xl mb-5">&bull;</span>
              <p class="text-black text-2xl">Backend is implemented in Django</p>
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
