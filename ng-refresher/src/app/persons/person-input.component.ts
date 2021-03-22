import { Component } from "@angular/core";
import { PersonService } from "./persons.service";


@Component({
  selector: 'app-person-input',
  templateUrl: './person-input.component.html',
  styleUrls: ['./person-input.component.css']
})
export class PersonInputComponent{

  enteredPersonName = '';

  constructor(private personService: PersonService) {

  }

  onCreatePerson(){
    console.log('Create a person ' + this.enteredPersonName);
    this.personService.addPerson(this.enteredPersonName);
    this.enteredPersonName = '';

  }
}
