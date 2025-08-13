import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    RouterModule, 
    CommonModule
  ],
  templateUrl: './header.html',
  styleUrl: './header.css'
})
export class Header {
  menuItems = [
    { path: '/page/home', icon: 'assets/icons/home.svg', label: 'Inicio' },
    { path: '/page/personal-info', icon: 'assets/icons/account_circle.svg', label: 'Información personal' },
    { path: '/page/experience', icon: 'assets/icons/work.svg', label: 'Experiencia' },
    { path: '/page/education', icon: 'assets/icons/school.svg', label: 'Educación' },
    { path: '/page/skills', icon: 'assets/icons/build.svg', label: 'Habilidades' },
    { path: '/page/projects', icon: 'assets/icons/folder_open.svg', label: 'Proyectos' },
    { path: '/page/contact', icon: 'assets/icons/mail.svg', label: 'Contacto' }
  ];
}
