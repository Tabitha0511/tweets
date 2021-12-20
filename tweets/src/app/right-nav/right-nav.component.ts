import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.scss'],
})
export class RightNavComponent implements OnInit {
  trendingTweet: any[] = [
    {
      name: 'racing',
      tag: '#red_bull',
      tweets: '9,128',
    },
    {
      name: 'cricket',
      tag: '#T20',
      tweets: '8,238',
    },
    {
      name: 'politics',
      tag: '#Tamil_Nadu',
      tweets: '4,287',
    },
    {
      name: 'bollywood',
      tag: '#bollywood',
      tweets: '6,283',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
