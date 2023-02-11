import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BindingComponent } from './Components/binding/binding.component';
import { ImageSliderComponent } from './Components/image-slider/image-slider.component';
import { RegistrationComponent } from './Components/Day3Components/registration/registration.component';
import { StudentsComponent } from './Components/Day3Components/students/students.component';
import { FormValidationComponent } from './Components/Day4Components/form-validation/form-validation.component';
import { HeaderComponent } from './Components/Day4Components/RoutingTask/header/header.component';
import { UserComponent } from './Components/Day4Components/RoutingTask/user/user.component';
import { UserDetailsComponent } from './Components/Day4Components/RoutingTask/user-details/user-details.component';
import { ProfileComponent } from './Components/Day4Components/RoutingTask/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Components/Day4Components/RoutingTask/error/error.component';
import {HttpClientModule} from '@angular/common/http';
const routes:Routes = 
                  [
                    {path:"", component:UserComponent},
                    {path:"user", component:UserComponent},
                    {path:"user/:id", component:UserDetailsComponent},
                    {path:"profile", component:ProfileComponent},
                    {path:"**", component:ErrorComponent}
                  ];


@NgModule({
  declarations: [
    AppComponent,
    BindingComponent,
    ImageSliderComponent,
    RegistrationComponent,
    StudentsComponent,
    FormValidationComponent,
    HeaderComponent,
    UserComponent,
    UserDetailsComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
