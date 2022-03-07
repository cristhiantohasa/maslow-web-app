import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ArchitectsComponent } from './components/architects/architects.component';
import { CardsComponent } from './components/cards/cards.component';
import { FooterComponent } from './components/commons/footer/footer.component';
import { ViewLastProjectComponent } from './components/commons/view-last-project/view-last-project.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProjectComponent } from './components/project/project.component';
import { ProjectsComponent } from './components/projects/projects.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'projects', component:CardsComponent},
  {path:'read-project/:name', component:ProjectComponent},
  {path:'architects', component:ArchitectsComponent},
  {path:'about-us', component:AboutUsComponent},
  {path:'contact', component:ContactComponent},
  {path:'cards', component:CardsComponent},
  {path:'footer', component:FooterComponent },
  {path:'view-last-project', component:ViewLastProjectComponent},
  {path:'**', component:HomeComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
