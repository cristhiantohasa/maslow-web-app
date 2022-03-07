import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/commons/header/header.component';
import { FooterComponent } from './components/commons/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ArchitectsComponent } from './components/architects/architects.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { SocialBarComponent } from './components/commons/social-bar/social-bar.component';
import { FormComponent } from './components/commons/form/form.component';
import { CardsComponent } from './components/cards/cards.component';
import { CardComponent } from './components/cards/card/card.component';
import { ProjectComponent } from './components/project/project.component';
import { ViewLastProjectComponent } from './components/commons/view-last-project/view-last-project.component';
import { ArchitectsCardComponent } from './components/architects/architects-card/architects-card.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CreateProjectComponent } from './components/commons/create-project/create-project.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProjectsComponent,
    ArchitectsComponent,
    AboutUsComponent,
    ContactComponent,
    SocialBarComponent,
    FormComponent,
    CardsComponent,
    CardComponent,
    ProjectComponent,
    ViewLastProjectComponent,
    ArchitectsCardComponent,
    CreateProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
