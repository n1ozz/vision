import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

import { FooterModule } from './core/components/footer/footer.module';
import { HeaderModule } from './core/components/header/header.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterOutlet, HeaderModule, FooterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Vision';
  footerUrl = 'https://www.google.com';
  footerLink = 'www.googler.com';

  constructor(@Inject(PLATFORM_ID) private platformId: object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const navMain = document.getElementById('navbarCollapse');
      if (navMain) {
        navMain.onclick = function onClick() {
          if (navMain) {
            navMain.classList.remove('show');
          }
        };
      }
    }
  }
}
