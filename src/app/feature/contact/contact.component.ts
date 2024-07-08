import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  template: `
    <section class="flex flex-col gap-5 my-10">
        <h1 class="text-bold text-5xl text-black text-center">Get in Touch</h1>
        <p class="text-xl text-center text-black">Contact Me</p>
    </section>
    <section class="flex justify-center mb-10">
      <section class="border border-gray-400 rounded-xl w-2/5 p-5">
        <p class="text-xl text-center text-black">ngawangchoeying303<span class="text-xl">&#64;</span>gmail.com</p>
      </section>
    </section>
  `,
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
