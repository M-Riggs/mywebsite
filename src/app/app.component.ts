import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
      this.matIconRegistry.addSvgIcon('headshot', this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/headshot.svg"));
      this.matIconRegistry.addSvgIcon('linkedin', this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/linkedinLogo.svg"));
  }

  title = 'Michael Riggs';
}
