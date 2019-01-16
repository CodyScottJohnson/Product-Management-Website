import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { trigger, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({transform: 'translateX(100%)', opacity: 0}),
          animate('50s', style({transform: 'translateX(0)', opacity: 1}))
        ]),
        transition(':leave', [
          style({transform: 'translateX(0)', opacity: 1}),
          animate('50s', style({transform: 'translateX(100%)', opacity: 0}))
        ])
      ]
    )
  ],
})
export class NewProjectComponent implements OnInit {
  public myForm: FormGroup;
  
  constructor(
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder
   ) {
     this.createForm();
   }
   private createForm() {
     this.myForm = this.formBuilder.group({
       username: '',
       password: ''
     });
   }
   private submitForm() {
     this.activeModal.close(this.myForm.value);
   }

  ngOnInit() {
  }

}
