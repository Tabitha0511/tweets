import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-app-shell',
  templateUrl: './app-shell.component.html',
  styleUrls: ['./app-shell.component.scss'],
})
export class AppShellComponent implements OnInit {
  sidenav: any[] = [
    {
      name: 'Home',
      icon: '../../assets/home.svg',
    },
    {
      name: 'Explore',
      icon: '../../assets/explore.svg',
    },
    {
      name: 'Notification',
      icon: '../../assets/notification.svg',
    },
    {
      name: 'Messages',
      icon: '../../assets/messages.svg',
    },
    {
      name: 'Bookmarks',
      icon: '../../assets/bookmarks.svg',
    },
    {
      name: 'Lists',
      icon: '../../assets/list.svg',
    },
    {
      name: 'Profile',
      icon: '../../assets/profile.svg',
    },
    {
      name: 'More',
      icon: '../../assets/more.svg',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
