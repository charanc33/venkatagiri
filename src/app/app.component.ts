import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  isBusiness: any = false;
  isUser = false;
  private router: any;

  ngOnInit() {
    if(window.location.pathname.indexOf('business') > 0 ){
      this.isBusiness = true;
      this.isUser = false;
    } else if (window.location.pathname.indexOf('user') > 0 ) {
      this.isBusiness = false;
      this.isUser = true;
    }

  }

  closeMenu() {
      const x = document.getElementById("myTopnav");
      if (x.className === "topnav") {
        x.className += " responsive";
      } else {
        x.className = "topnav";
      }
  }
}
