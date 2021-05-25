import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortalRoutingModule } from './portal-routing.module';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { AboutComponent } from './about/about.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CareersComponent } from './careers/careers.component';
import { FooterComponent } from './footer/footer.component';

import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    GalleryComponent,
    CareersComponent,
    FooterComponent,
    ContactComponent],
  imports: [
    CommonModule,
    PortalRoutingModule,
    HttpClientModule
  ],
  exports: [
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    GalleryComponent,
    CareersComponent,
    FooterComponent],
})
export class PortalModule { }
