import { Component } from '@angular/core';

@Component({
  selector: 'app-accordion-card',
  standalone: true,
  imports: [],
  template: `
  <section class="flex justify-center my4 lg:my-10">
    <section class="flex flex-col gap-4 lg:gap-10 lg:w-8/12 border border-gray-300 rounded-xl p-2 lg:p-5">
      <h1 class="text-bold text-lg lg:text-5xl text-black text-center my-4 lg:my-10">Hobbies :</h1>
      <div class="collapse collapse-arrow bg-white border border-gray-300">
        <input type="radio" name="my-accordion-2"/>
        <!-- checked="checked" -->
        <div class="collapse-title text-black font-medium text-md lg:text-3xl flex items-center">Football &nbsp; <span class="material-symbols-outlined text-xl lg:text-3xl">sports_soccer</span></div>
        <div class="collapse-content">
          <p class="text-black  text-xs lg:text-sm">&bull; Represented my college and came runners up in VTU inter college competition, Mysore region held at PESCE, Mandya</p>
          <p class="text-black  text-xs lg:text-sm">&bull; Played for bannur town fc in Mysore league 'A' competition</p>
          <p class="text-black  text-xs lg:text-sm">&bull; Played for St. Joseph's Academy for 6 years</p>
        </div>
      </div>
      <div class="collapse collapse-arrow bg-white border border-gray-300">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-black font-medium text-md lg:text-3xl flex items-center">Basketball &nbsp;<span class="material-symbols-outlined text-xl lg:text-3xl">sports_basketball</span></div>
        <div class="collapse-content">
          <p class="text-black  text-xs lg:text-sm">&bull; Represented my college basketball team in VTU inter college competition, Mysore region held at ATME college, Mysore</p>
        </div>
      </div>
      <div class="collapse collapse-arrow bg-white border border-gray-300">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-black font-medium text-md lg:text-3xl flex items-center">Listening to music &nbsp;<span class="material-symbols-outlined text-xl lg:text-3xl">music_note</span></div>
        <div class="collapse-content">
          <p class="text-black  text-xs lg:text-sm">&bull; I listen to rap songs and english songs</p>
          <p class="text-black  text-xs lg:text-sm">&bull; I also listen to hindi and punjabi songs</p>
        </div>
      </div>
      <div class="collapse collapse-arrow bg-white border border-gray-300">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-black font-medium text-md lg:text-3xl flex items-center">Drawing &nbsp; <span class="material-symbols-outlined text-xl lg:text-3xl">stylus_note</span></div>
        <div class="collapse-content">
          <p class="text-black text-xs lg:text-sm">&bull; Caricature</p>
          <p class="text-black text-xs lg:text-sm">&bull; Canvas painting</p>
          <p class="text-black text-xs lg:text-sm">&bull; I have created a side gig called seray designs where I create art</p>
        </div>
      </div>
      <div class="collapse collapse-arrow bg-white border border-gray-300">
        <input type="radio" name="my-accordion-2" />
        <div class="collapse-title text-md lg:text-3xl flex items-center text-black font-medium">Table tennis &nbsp;<span class="material-symbols-outlined text-xl lg:text-3xl">sports_tennis</span></div>
        <div class="collapse-content">
          <p class="text-black text-xs lg:text-sm">&bull; Playing table tennis in spare time during college days</p>
        </div>
      </div>
    </section>
  </section>
  `,
  styleUrl: './accordion-card.component.scss'
})
export class AccordionCardComponent {

}
