import { Component, OnInit} from "@angular/core";
import { PersonService } from "./persons.service";


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit{

  personList: string[];
  //private presonService: PersonService;

  constructor(private prsService: PersonService){
    //this.personList = prsService.persons;
    //this.presonService = prsService;
  }

  ngOnInit(){
    this.personList = this.prsService.persons;

  }

  onRemovePerson(personname: string){
    this.prsService.removePerson(personname);
  }
}
