import { Component, OnInit } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[];

  constructor() { }

  ngOnInit() {
    this.items = [
      { label: 'CardView', 
        icon: 'pi pi-fw pi-file',
        routerLink: '/cardview', 
        routerLinkActiveOptions: 'active'},
      { label: 'Client', 
        icon: 'pi pi-fw pi-file', 
        routerLink: '/client', 
        routerLinkActiveOptions: 'active'},
      { label: 'Work', 
        icon: 'pi pi-fw pi-file',
        routerLink: '/work', 
        routerLinkActiveOptions: 'active'},
      { label: 'Master Data', 
        icon: 'pi pi-fw pi-file',
        routerLink: '/masterdata', 
        routerLinkActiveOptions: 'active'}
    ]
  }

}
