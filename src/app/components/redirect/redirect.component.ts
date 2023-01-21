/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { pluck } from 'rxjs';

@Component({
  selector: 'image-share-redirect',
  templateUrl: './redirect.component.html',
  styleUrls: ['./redirect.component.scss'],
})
export class RedirectComponent implements OnInit {
  public msg: string = '';
  constructor(
    private meta: Meta,
    private route: ActivatedRoute,
    private titleSvc: Title
  ) {}

  ngOnInit(): void {
    const { data } = this.route.snapshot.data;
    this.titleSvc.setTitle(data?.title);
    this.meta.updateTag(
      {
        name: 'description',
        content: data?.description,
      },
    );

    if (window.location.pathname.includes('/abc')) {
      this.msg = 'redirect..';
      this.meta.addTag({
        httpEquiv: 'refresh',
        content:
          '0; url=https://storage.googleapis.com/paotang-static-file/DEEPLINK/paotang-external-deeplink.html?openExternalBrowser=1&destination=missionWeb',
      });
    } else if (window.location.pathname.includes('/xyz')) {
      this.msg = 'redirect..';
      this.meta.addTag({
        httpEquiv: 'refresh',
        content:
          '2; url=https://storage.googleapis.com/paotang-static-file/DEEPLINK/paotang-external-deeplink.html?openExternalBrowser=1&destination=missionWeb&page=tracking&campaignCode=00000000-0000-0000-0000-0000000ca003',
      });
    } else if (window.location.pathname.includes('/testing')) {
      this.msg = 'redirect..';
      window.location.href = 'https://bitakou.github.io/test-pdf-viewer-ngx/';
    } else if (window.location.pathname.includes('/nothing')) {
      this.msg = 'nothing here';
      // this.meta.addTags([
      //   {
      //     property: 'title',
      //     content: 'title: Nothing change in this page',
      //   },
      //   {
      //     property: 'description',
      //     content: 'description: test description here!',
      //   },
      //   {
      //     property: 'og:title',
      //     content: 'og:title Nothing change in this page',
      //   },
      //   { property: 'og:type', content: 'website' },
      //   {
      //     property: 'og:url',
      //     content: 'https://nebtry-new.github.io/image-share/nothing',
      //   },
      //   {
      //     property: 'og:image',
      //     content:
      //       'https://mission-static-file-sit.storage.googleapis.com/mock/campaign-spending-value.png',
      //   },
      //   { name: 'robots', content: 'index,follow' },
      // ]);
    } else {
      this.msg = 'invalid url';
    }
  }
}
