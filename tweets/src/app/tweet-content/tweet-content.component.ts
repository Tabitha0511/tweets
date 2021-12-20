import { TweetsService } from './../service/tweets.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { response } from '../response';
import { map } from 'rxjs';
import axios from 'axios';

@Component({
  selector: 'app-tweet-content',
  templateUrl: './tweet-content.component.html',
  styleUrls: ['./tweet-content.component.scss'],
})
export class TweetContentComponent implements OnInit {
  tweet: any;
  username: any;
  authId = [];
  icons: any[] = [
    {
      icon: '../../assets/picture.svg',
    },
    {
      icon: '../../assets/play.svg',
    },
    {
      icon: '../../assets/poll.svg',
    },
    {
      icon: '../../assets/emoji.svg',
    },
  ];
  tweets: any;

  constructor(private http: HttpClient, private ts: TweetsService) {}

  ngOnInit(): void {
    this.recent_tweets();
    this.tweet = response;

    this.authId = this.tweet.author_id;
    console.log(this.tweet);
    console.log(this.authId);
  }

  recent_tweets(): void {
    this.http.get(
      `${environment.baseURL}?query=cinema&tweet.fields=author_id,created_at,entities`,
      {
        headers: {
          Authorization: environment.bearer_token,
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        },
      }
    );

    const headers = new HttpHeaders();
    const query = 'query=ronaldo';
    headers.append('Content-Type', 'application/X-www-form-urlencoded');

    this.http
      .post(
        `${environment.baseURL}?query=cinema&tweet.fields=author_id,created_at,entities`,
        query,
        { headers: headers }
      )
      .subscribe((res) => {
        this.tweets = res;
        console.log(this.tweets);
      });
  }
}
