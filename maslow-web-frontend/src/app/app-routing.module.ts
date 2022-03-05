import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ArchitectsComponent } from './components/architects/architects.component';
import { CardsComponent } from './components/cards/cards.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'projects', component:CardsComponent},
  {path:'architects', component:ArchitectsComponent},
  {path:'aboutUs', component:AboutUsComponent},
  {path:'contact', component:ContactComponent},
  {path:'cards', component:CardsComponent},
  {path:'**', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
