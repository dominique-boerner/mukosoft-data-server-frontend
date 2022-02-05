import {Component, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [
    {
      label: "Dashboard",
      icon: "fas fa-tachometer-alt",
      routerLink: "dashboard",
    },
    {
      label: "Medikamente",
      icon: "fas fa-pills",
      routerLink: "medication"
    },
    {
      label: "Rezepte",
      icon: "fas fa-hamburger",
      routerLink: "recipes"
    }
  ]

  constructor() {
  }

  ngOnInit(): void {
  }

}
