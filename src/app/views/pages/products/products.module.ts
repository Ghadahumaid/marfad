
import { SubHeaderComponent } from './../../partials/sub-header/sub-header.component';
import { FooterComponent } from './../../partials/footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list/products-list.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { BreadcrumbsComponent } from './../../partials/breadcrumbs/breadcrumbs.component';



@NgModule({
  declarations: [ProductsListComponent, SingleProductComponent, FooterComponent, SubHeaderComponent, BreadcrumbsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
