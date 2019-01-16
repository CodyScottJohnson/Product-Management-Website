import { Component, OnInit } from '@angular/core';
import {NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-contact-modal',
  templateUrl: './contact-modal.component.html',
  styleUrls: ['./contact-modal.component.scss']
})
export class ContactModalComponent implements OnInit {
  closeResult: string;
  currentOption: string = "all";
  constructor(public modal: NgbActiveModal) { }

  ngOnInit() {
  }
  ShowOption = (option) =>{
    if(this.currentOption == "all"){
      return true;
    }else if(this.currentOption != option){
      return false;
    }
    return true;
  }
  ExpandedOption = (option) => {
    if(this.currentOption == option){
      return true;
    }
    return false;
  }
  SelectOption = (option) => { 
    this.currentOption = option;
  }
}
