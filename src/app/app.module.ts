import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './ToDoList/Authentication/authentication/authentication.component';
import { MaincourseComponent } from './ToDoList/maincourse/maincourse.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddcourceComponent } from './ToDoList/addcource/addcource.component';
import { UserService } from './user/user.service';
import { CourceService } from './cource/cource.service';
import { AuthGuard } from './ToDoList/Authentication/service/auth.guard';





@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    MaincourseComponent,
    HeaderComponent,
    FooterComponent,
    AddcourceComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [UserService, AuthenticationComponent, CourceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
