import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/Form/login/login.component';
import { NgbModule,NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { LayoutComponent } from './components/layout/layout.component';
import { RegisterComponent } from './components/Form/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LayoutComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbPaginationModule,
    NgbAlertModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
