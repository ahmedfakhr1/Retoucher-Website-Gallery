import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SingleProjectComponent } from './single-project/single-project.component';
import { InfoComponent } from './info/info.component';
import { BodyComponent } from './body/body.component';

const routes: Routes = [
  {path:'',redirectTo:'/home',pathMatch:"full"},
  {path:"SinglePage",component:SingleProjectComponent},
  {path:"info",component:InfoComponent},
  {path:"home",component:BodyComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
