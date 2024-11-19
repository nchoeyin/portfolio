import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SpaLayoutComponent } from './shared/layouts/spa-layout/spa-layout.component';
import { HeaderComponent } from './components/header/header.component';
import { IntroCardComponent } from './components/intro-card/intro-card.component';
import { AboutComponent } from './feature/about/about.component';
import { ContactComponent } from './feature/contact/contact.component';
import { SkillsComponent } from './feature/skills/skills.component';
import { ProjectsComponent } from './feature/projects/projects.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccordionCardComponent } from './components/accordion-card/accordion-card.component';
import {MarqueeComponent} from "./components/marquee/marquee.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SpaLayoutComponent, HeaderComponent, FooterComponent, FooterComponent, IntroCardComponent, AboutComponent, ContactComponent, SkillsComponent,ProjectsComponent, AccordionCardComponent, MarqueeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}
