import { Component, OnInit,HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public showSideMenu:boolean = false;
  constructor() { }
  isSticky: boolean = false;

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.isSticky = window.pageYOffset >= 100;

  }
  ngOnInit() {
  }
  toggleSideNav(visible:boolean){
    this.showSideMenu = visible;
  }
  getLogo(){
    if(this.isSticky){
      return "assets/img/PMA-Logo-Light.png";
    }
    return "assets/img/PMA-Logo-Light.png"
  }
}
