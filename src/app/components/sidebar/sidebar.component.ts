import {
  Component,
  ElementRef,
  HostListener,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {

  public isSidebarClosed = true;
  public menuItems = [
    {
      icon: 'bx bx-grid-alt',
      name: 'Dashboard',
      link: '#',
      isOpen: false,
    },
    {
      icon: 'bx bx-collection',
      name: 'Category',
      isOpen: false,
      submenu: [
        { name: 'HTML & CSS', link: '#' },
        { name: 'JavaScript', link: '#' },
        { name: 'PHP & MySQL', link: '#' }
      ],
    },
    {
      icon: 'bx bx-book-alt',
      name: 'Posts',
      isOpen: false,
      submenu: [
        { name: 'Web Design', link: '#' },
        { name: 'Login Form', link: '#' },
        { name: 'Card Design', link: '#' }
      ],
    },
    {
      icon: 'bx bx-line-chart',
      name: 'Chart',
      isOpen: false,
      link: '#',
    },
    {
      icon: 'bx bx-cog',
      name: 'Settings',
      isOpen: false,
      link: '#',
    }
  ];

  dropdowns = {
    category: false,
    posts: false,
    plugins: false,
    // Add more keys as needed
  };

  toggleSidebar() {
    this.isSidebarClosed = !this.isSidebarClosed;
  }

  toggleSubmenu(item: any) {
    item.isOpen = !item.isOpen;
  }

}
