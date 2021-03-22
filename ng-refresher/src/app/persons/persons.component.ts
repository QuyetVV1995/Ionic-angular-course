import { Component, OnDestroy, OnInit} from "@angular/core";
import { Subscription } from "rxjs";
import { PersonService } from "./persons.service";


@Component({
  selector: 'app-persons',
  templateUrl: './persons.component.html'
})
export class PersonsComponent implements OnInit, OnDestroy{

  personList: string[];
  isFetching = false;
  private personListSubs: Subscription;
  //private presonService: PersonService;

  constructor(private prsService: PersonService){
    //this.personList = prsService.persons;
    //this.presonService = prsService;
  }

  ngOnInit(){

    this.prsService.fetchPersons();
    this.personListSubs = this.prsService.personsChanged.subscribe(
      persons =>{
        this.personList = persons;
        this.isFetching =false;
      }
    );
    this.isFetching = true;
  }

  onRemovePerson(personname: string){
    this.prsService.removePerson(personname);
  }

  ngOnDestroy(){
    this.personListSubs.unsubscribe();
  }
}
