import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { from } from 'rxjs';
import { FormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonsComponent } from "./persons/persons.component";
import { PersonInputComponent } from "./persons/person-input.component"
import { AppRoutingModule } from './app-routing.module';
import { PersonService } from './persons/persons.service';

@NgModule({
  declarations: [
    AppComponent,
    PersonsComponent,
    PersonInputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
