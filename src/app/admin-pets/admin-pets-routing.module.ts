import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PetsOverwiewComponent} from "../pets-overwiew/pets-overwiew.component";

const routes: Routes = [{
  path:'',
  component: PetsOverwiewComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminPetsRoutingModule { }
