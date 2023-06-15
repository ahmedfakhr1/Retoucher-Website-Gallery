import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleProjectComponent } from './single-project/single-project.component';
import { InfoComponent } from './info/info.component';
import { BodyComponent } from './body/body.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewsComponent } from './reviews/reviews.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:"full"},
  {path:"SinglePage",component:SingleProjectComponent},
  {path:"info",component:InfoComponent},
  {path:"home",component:BodyComponent},
  {path:"contact",component:ContactComponent},
  {path:"reviews",component:ReviewsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
