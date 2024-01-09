import { Component } from "@angular/core";

@Component({
    selector: 'home',
    templateUrl:'./home.html',
    styleUrls: ['./home.css']
})
export class Home {
    constructor() {

    }

    ngOnInit() : void {

    } 

    toggleMenu(): void {
        const navLinks = document.getElementById('navLinks');
        if (navLinks) {
          navLinks.classList.toggle('hidden'); // Toggle the 'hidden' class to show/hide the navigation links
        }
      }

}