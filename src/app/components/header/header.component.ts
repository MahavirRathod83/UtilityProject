import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  //   public headerMenuItems = [
  //   {
  //     icon: 'fa-solid fa-gauge',
  //     name: 'Dashboard',
  //     link: '#',
  //     isOpen: false
  //   },
  //   {
  //     icon: 'fa-solid fa-layer-group',
  //     name: 'Category',
  //     isOpen: false,
  //     submenu: [
  //       { name: 'HTML & CSS', link: '#' },
  //       { name: 'JavaScript', link: '#' },
  //       { name: 'PHP & MySQL', link: '#' }
  //     ]
  //   },
  //   {
  //     icon: 'fa-solid fa-book',
  //     name: 'Posts',
  //     isOpen: false,
  //     submenu: [
  //       { name: 'Web Design', link: '#' },
  //       { name: 'Login Form', link: '#' },
  //       { name: 'Card Design', link: '#' }
  //     ]
  //   },
  //   {
  //     icon: 'fa-solid fa-chart-line',
  //     name: 'Chart',
  //     isOpen: false,
  //     link: '#'
  //   },
  //   {
  //     icon: 'fa-solid fa-gear',
  //     name: 'Settings',
  //     isOpen: false,
  //     link: '#'
  //   }
  // ];
  public headerMenuItems = [
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
        { name: 'PHP & MySQL', link: '#' },
      ],
    },
    {
      icon: 'bx bx-book-alt',
      name: 'Posts',
      isOpen: false,
      submenu: [
        { name: 'Web Design', link: '#' },
        { name: 'Login Form', link: '#' },
        { name: 'Card Design', link: '#' },
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
    },
  ];

  @HostListener('document:click', ['$event'])
  handleClickOutside(event: Event) {
    if (!this.eRef.nativeElement.contains(event.target)) {
      this.headerMenuItems.forEach((i) => (i.isOpen = false));
    }
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 768 && this.isMobileMenuOpen) {
      this.closeMobileMenu();
    }
  }

  constructor(private eRef: ElementRef) {}

  toggleSubmenu(item: any, event: MouseEvent) {
    event.stopPropagation();

    if (item.isOpen) {
      item.isOpen = false;
      return;
    }

    this.headerMenuItems.forEach((i) => (i.isOpen = false));

    item.isOpen = true;
  }

  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  closeMobileMenu() {
    this.isMobileMenuOpen = false;
    this.headerMenuItems.forEach((item) => (item.isOpen = false));
  }
}
