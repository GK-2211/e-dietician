import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowseFoodComponent } from './browse-food/browse-food.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatDialogModule} from '@angular/material/dialog';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProfileComponent } from './profile/profile.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MealPlanComponent } from './meal-plan/meal-plan.component';
import { PopupLoginComponent } from './popup-login/popup-login.component';
import { PopupRegisterComponent } from './popup-register/popup-register.component';


@NgModule({
  declarations: [
    AppComponent,
    BrowseFoodComponent,
    LoginComponent,
    SignUpComponent,
    ProfileComponent,
    LandingPageComponent,
    MealPlanComponent,
    PopupLoginComponent,
    PopupRegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatTabsModule,
    MatSelectModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule,
    ToastrModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
