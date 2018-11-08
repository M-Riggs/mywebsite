import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public name = '';
  public email = '';
  public subject = '';
  public message = '';
  
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    private http: HttpClient
  ) {
      this.matIconRegistry.addSvgIcon('headshot', this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/headshot.svg"));
      this.matIconRegistry.addSvgIcon('linkedin', this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/linkedinLogo.svg"));
  }

  title = 'Michael Riggs';

  sendEmail() {
    let postVars = {
      email : this.email,
      name : this.name,
      message : this.message,
      subject: this.subject
    };

    this.http.post("http://michael-riggs.com/email.php", postVars).subscribe();
  }
}