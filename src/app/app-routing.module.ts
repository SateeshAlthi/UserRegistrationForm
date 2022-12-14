import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserregistrationComponent } from './userregistration/userregistration.component';


const routes: Routes = [
{path:'',component:HomeComponent},
{path:'ur',component:UserregistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
