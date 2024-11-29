import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonModule } from 'primeng/button';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { WorkComponent } from './pages/work/work.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginPopupComponent } from './components/login-popup/login-popup.component';
import { AuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ContactComponent } from './components/contact/contact.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    WorkComponent,
    DashboardComponent,
    LoginPopupComponent,
    FooterComponent,
    ContactComponent,
    TestimonialComponent
    
  ],
  imports: [
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 1000, // Toast timeout in milliseconds
      positionClass: 'toast-top-right', // Position of the toast
      preventDuplicates: true, // Prevent duplicate toasts
    }),
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    ReactiveFormsModule,
    FormsModule,
   
    
  ],
  providers: [AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
