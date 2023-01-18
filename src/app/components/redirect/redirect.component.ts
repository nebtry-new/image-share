/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'image-share-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss'],
})
export class RedirectComponent implements OnInit {
  public msg: string = '';
  constructor(private meta: Meta) {}

  ngOnInit(): void {
    if (window.location.pathname.includes('/abc')) {
      this.msg = 'redirect..';
      window.location.href =
        'https://storage.googleapis.com/paotang-static-file/DEEPLINK/paotang-external-deeplink.html?openExternalBrowser=1&destination=missionWeb';
    } else if (window.location.pathname.includes('/xyz')) {
      this.msg = 'redirect..';
      window.location.href =
        'https://storage.googleapis.com/paotang-static-file/DEEPLINK/paotang-external-deeplink.html?openExternalBrowser=1&destination=missionWeb&page=tracking&campaignCode=00000000-0000-0000-0000-0000000ca003';
    } else {
      this.msg = 'invalid url';
    }
  }
}
