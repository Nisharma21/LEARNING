import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './COMPONENTS/user/user.component';
import { StudentComponent } from './COMPONENTS/student/student.component';
import { RegisterComponent } from './COMPONENTS/register/register.component';
import { LoginComponent } from './COMPONENTS/login/login.component';
import { DashboardComponent } from './COMPONENTS/dashboard/dashboard.component';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    StudentComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent,
    
  
   
   
 
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
