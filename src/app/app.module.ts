import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FamilyRegisterComponent } from './family/family-register/family-register.component';
import { FamilyRoutingModule } from './family/family-routing/family-routing.module';
import { UserService } from './user.service';
import { LayoutComponent } from './family/layout/layout.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FrontComponent } from './family/front/front.component';
import { FamilyListComponent } from './family/family-list/family-list.component';
import { SimpleModalModule } from 'ngx-simple-modal';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
    FamilyRegisterComponent,
    LayoutComponent,
    FrontComponent,
    FamilyListComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FamilyRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    SimpleModalModule,   
    ToastrModule.forRoot(),

  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
