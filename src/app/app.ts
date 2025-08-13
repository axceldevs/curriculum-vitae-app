import { Component, Renderer2, OnDestroy } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd  } from '@angular/router';
import { Header } from './components/header/header';
import { } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    Header
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnDestroy {
  protected title = 'curriculum-vitae-app';
  routerSub: Subscription;

  constructor(private router: Router, private renderer: Renderer2) {
    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Obtener la ruta actual
        const url = event.urlAfterRedirects.split('?')[0];

        // Limpiar clases anteriores del body (o cualquier contenedor)
        this.clearBodyClasses();

        // Agregar clase basada en ruta
        const className = this.routeToClassName(url);
        this.renderer.addClass(document.body, className);
      }
    });
  }

  clearBodyClasses() {
    const classes = Array.from(document.body.classList);
    console.log(classes)
    classes.forEach(c => {
      if (c.startsWith('page-')) {
        this.renderer.removeClass(document.body, c);
      }
    });
  }

  routeToClassName(url: string): string {
    // Ejemplo simple: convierte /page/home en page-home
    return 'page-' + url.replace(/\//g, '-').replace(/^-|-$/g, '');
  }

  ngOnDestroy() {
    this.routerSub.unsubscribe();
  }
}
