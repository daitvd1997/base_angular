import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { JwtInterceptor } from './auth/jwt.interceptor';
import { ErrorInterceptor } from './auth/error.interceptor';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-alerts';
import { LoginComponent } from './components/login/login.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './components/main/main.component';
import { TableComponent } from './components/table/table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MainComponent,
    TableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,    
    FormsModule,
    AlertModule.forRoot({maxMessages: 5, timeout: 5000, position: 'right'}),
    NoopAnimationsModule
  
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
