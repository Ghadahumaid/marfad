import { ContactUsComponent } from './views/pages/contact-us/contact-us.component';
// main
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';

//pages
import { HomeComponent } from './views/pages/home/home.component';
import { AboutUsComponent } from './views/pages/about-us/about-us.component';
import { FindUsComponent } from './views/pages/find-us/find-us.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: HomeComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'find-us',
    component: FindUsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'products',
    loadChildren: './views/pages/products/products.module#ProductsModule'
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
