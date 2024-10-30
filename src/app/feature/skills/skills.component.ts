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
        <section class="border border-black rounded-3xl lg:w-7/12 p-2 lg:p-5 flex flex-col gap-4 lg:gap-10 items-center">
          <h2 class="text-black text-md lg:text-3xl font-bold text-center flex items-center">Frontend Development &nbsp;<span class="material-symbols-outlined text-md lg:text-5xl font-extralight text-black">code</span></h2>
          <section class="flex flex-wrap h-full w-full gap-2 lg:gap-5 justify-center">
<!--            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;Angular</p>-->
                <img class="h-16 w-16 lg:h-32 lg:w-32" src="https://avatars.githubusercontent.com/u/139426?s=200&v=4" alt="Angular"/>
<!--            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;Tailwind CSS</p>-->
                <img class="h-16 w-16 lg:h-32 lg:w-32" src="https://avatars.githubusercontent.com/u/30317862?s=200&v=4" alt="Tailwindcss"/>
<!--            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;Javascript</p>-->
                <img class="h-16 w-16 lg:h-32 lg:w-32" src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" alt="Javascript"/>
<!--            <p class="text-black text-sm lg:text-2xl"> &bull; &nbsp;HTML</p>-->
                <img class="h-16 w-16 lg:h-32 lg:w-32" src="https://cdn-icons-png.flaticon.com/128/174/174854.png" alt="HTML"/>
<!--            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;CSS</p>-->
                <img class="h-16 w-16 lg:h-32 lg:w-32" src="https://cdn-icons-png.flaticon.com/128/919/919826.png" alt="CSS"/>
<!--            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;React Js</p>-->
                <img class="h-16 w-16 lg:h-32 lg:w-32" src="https://cdn-icons-png.flaticon.com/128/3066/3066252.png" alt="React JS"/>
                <img class="h-16 w-16 lg:h-32 lg:w-32" src="https://cdn-icons-png.flaticon.com/512/5968/5968381.png" alt="Typescript"/>
          </section>
        </section>

        <section class="border border-black rounded-3xl lg:w-7/12 p-2 lg:p-5 flex flex-col gap-4 lg:gap-10 items-center">
          <!-- <div class="flex justify-center">
              <span class="material-symbols-outlined text-7xl text-black">code</span>
            </div> -->
          <h2 class="text-black text-md lg:text-3xl font-bold text-center flex items-center">Backend Development &nbsp;<span class="material-symbols-outlined text-md lg:text-5xl font-extralight text-black">deployed_code</span></h2>
          <section class="flex flex-wrap w-full gap-2 lg:gap-5 justify-center">
<!--            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;Django</p>-->
<!--            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;Python</p>-->
<!--            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;Java</p>-->
<!--            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;Firebase</p>-->
<!--            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;Django REST framework</p>-->
<!--            <p class="text-black text-sm lg:text-2xl"> &bull; &nbsp;aiohttp</p>-->
                <img class="h-16 w-16 lg:h-32 lg:w-32" src="https://avatars.githubusercontent.com/u/27804?s=200&v=4" alt="Django"/>
                <img class="h-16 w-16 lg:h-32 lg:w-32" src="https://avatars.githubusercontent.com/u/1525981?s=200&v=4" alt="Python"/>
                <img class="h-16 w-16 lg:h-32 lg:w-32" src="https://raw.githubusercontent.com/github/explore/5b3600551e122a3277c2c5368af2ad5725ffa9a1/topics/java/java.png" alt="Java"/>
                <img class="h-16 w-16 lg:h-32 lg:w-32" src="https://avatars.githubusercontent.com/u/1335026?s=200&v=4" alt="Firebase"/>
                <img class="h-16 w-16 lg:h-32 lg:w-32" src="https://www.django-rest-framework.org/img/logo.png" alt="Django REST framework"/>
                <img class="h-16 w-16 lg:h-32 lg:w-32" src="https://pypi-camo.freetls.fastly.net/aac5c25bd38750c85c46e0c3911f956b99dff4ce/68747470733a2f2f7261772e67697468756275736572636f6e74656e742e636f6d2f61696f2d6c6962732f61696f687474702f6d61737465722f646f63732f61696f687474702d706c61696e2e737667" alt="aiohttp"/>
                <img class="h-16 w-16 lg:h-32 lg:w-32" src="https://camo.githubusercontent.com/4b0000b8e7a6449a924fe0212093b9f3936ef80cc8fdfbb770baad58f58b8c2c/68747470733a2f2f6e6573746a732e636f6d2f696d672f6c6f676f2d736d616c6c2e737667" alt="Nest JS"/>
                <img class="h-16 w-16 lg:h-32 lg:w-32" src="https://camo.githubusercontent.com/c3635f27439ecdbf20e3cbf969c156f4040f10a0c8c836cf307d916dd8f806d4/68747470733a2f2f6173736574732e76657263656c2e636f6d2f696d6167652f75706c6f61642f76313636323133303535392f6e6578746a732f49636f6e5f6461726b5f6261636b67726f756e642e706e67" alt="Next JS"/>
          </section>
        </section>
      </section>
      <section class="flex w-full justify-center">
        <section class="flex flex-col border border-black rounded-3xl w-full lg:w-7/12 p-2 lg:p-5 gap-4 lg:gap-10 items-center mt-5">
          <h2 class="text-black text-md lg:text-3xl font-bold text-center flex items-center">Database &nbsp;<span class="material-symbols-outlined text-md lg:text-5xl font-extralight text-black">database</span></h2>
          <section class="flex gap-2 lg:gap-5 flex-col mb-10 mt-5">
<!--            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;PostgreSQL</p>-->
<!--            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;MySQL</p>-->
<!--            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;NoSQL</p>-->
<!--            <p class="text-black text-sm lg:text-2xl">&bull; &nbsp;MongoDB</p>-->
                <img class="h-16 w-16 lg:h-32 lg:w-32" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/180px-Postgresql_elephant.svg.png" alt="PostgreSQL"/>
                <img class="h-16 w-16 lg:h-32 lg:w-32" src="https://cdn-icons-png.flaticon.com/128/919/919836.png" alt="MySQL"/>
<!--                <img class="h-16 w-16 lg:h-32 lg:w-32" src="https://avatars.githubusercontent.com/u/45120?s=48&v=4" alt="NoSQL"/>-->
                <img class="h-16 w-16 lg:h-32 lg:w-32" src="https://github.com/mongodb/mongo/raw/master/docs/leaf.svg" alt="MongoDB"/>

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
