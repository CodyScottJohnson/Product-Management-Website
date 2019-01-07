import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';


@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
  animations: [
    trigger('EnterLeave', [
      state('flyIn', style({ transform: 'translateX(0)' })),
      transition('show', [
        style({ transform: 'translateX(-100%)' }),
        animate('06.5s 300ms ease-in')
      ]),
      transition(':hide', [
        animate('7.3s ease-out', style({ transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class SideNavComponent implements OnInit {
  private _active: boolean = false;
  @Input() active: boolean;
  @Output() activeStatusChange = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  toggleMenu(){

    this.active = !this.active;
    this.activeStatusChange.emit(this.active);
  }
}
