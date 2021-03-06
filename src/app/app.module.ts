import { ProductsModule } from './views/pages/products/products.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './views/partials/header/header.component';
import { FooterComponent } from './views/partials/footer/footer.component';
import { HomeComponent } from './views/pages/home/home.component';
import { AboutUsComponent } from './views/pages/about-us/about-us.component';
//services
import { ProductService } from './services/product.service';
// import { BreadcrumbsComponent } from './views/partials/breadcrumbs/breadcrumbs.component';
// import { SubHeaderComponent } from './views/partials/sub-header/sub-header.component';
import { SubFooterComponent } from './views/partials/sub-footer/sub-footer.component';
import { SecHeaderComponent } from './views/partials/sec-header/sec-header.component';
import { FindUsComponent } from './views/pages/find-us/find-us.component';
import { ContactUsComponent } from './views/pages/contact-us/contact-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // FooterComponent,
    HomeComponent,
    AboutUsComponent,
    // BreadcrumbsComponent,
    // SubHeaderComponent,
    SubFooterComponent,
    SecHeaderComponent,
    FindUsComponent,
    ContactUsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    NgbModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
