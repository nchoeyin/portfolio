import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion-card',
  standalone: true,
  imports: [],
  template: `
  <section class="flex justify-center my-10">
    <section class="flex flex-col gap-10 w-8/12 border border-gray-300 rounded-xl p-5">
      <h1 class="text-bold text-5xl text-black text-center my-10">Hobbies :</h1>
      <div class="collapse collapse-arrow bg-white border border-gray-300">
        <input type="radio" name="my-accordion-2"/>
        <!-- checked="checked" -->
        <div class="collapse-title text-black font-medium text-3xl flex items-center">Football &nbsp; <span class="material-symbols-outlined text-3xl">sports_soccer</span></div>
        <div class="collapse-content">
          <p class="text-black text-md">&bull; Represented my college and came runners up in VTU inter college competition, Mysore region held at PESCE, Mandya</p>
          <p class="text-black text-md">&bull; Played for bannur town fc in Mysore league 'A' competition</p>
          <p class="text-black text-md">&bull; Played for St. Joseph's Academy for 6 years</p>
        </div>
      </div>
      <div class="collapse collapse-arrow bg-white border border-gray-300">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-black font-medium text-3xl flex items-center">Basketball &nbsp;<span class="material-symbols-outlined text-3xl">sports_basketball</span></div>
        <div class="collapse-content">
          <p class="text-black text-md">&bull; Represented my college basketball team in VTU inter college competition, Mysore region held at ATME college, Mysore</p>
        </div>
      </div>
      <div class="collapse collapse-arrow bg-white border border-gray-300">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-black font-medium text-3xl flex items-center">Listening to music &nbsp;<span class="material-symbols-outlined text-3xl">music_note</span></div>
        <div class="collapse-content">
          <p class="text-black text-md">&bull; I listen to rap songs and english songs</p>
          <p class="text-black text-md">&bull; I also listen to hindi and punjabi songs</p>
        </div>
      </div>
      <div class="collapse collapse-arrow bg-white border border-gray-300">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-black font-medium text-3xl flex items-center">Drawing &nbsp; <span class="material-symbols-outlined text-3xl">stylus_note</span></div>
        <div class="collapse-content">
          <p class="text-black text-md">&bull; Caricature</p>
          <p class="text-black text-md">&bull; Canvas painting</p>
          <p class="text-black text-md">&bull; I have created a side gig called seray designs where I create art</p>
        </div>
      </div>
      <div class="collapse collapse-arrow bg-white border border-gray-300">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-3xl flex items-center text-black font-medium">Table tennis &nbsp;<span class="material-symbols-outlined text-3xl">sports_tennis</span></div>
        <div class="collapse-content">
          <p class="text-black text-md">&bull; Playing table tennis in spare time during college days</p>
        </div>
      </div>
    </section>
  </section>
  `,
  styleUrl: './accordion-card.component.scss'
})
export class AccordionCardComponent {

}
