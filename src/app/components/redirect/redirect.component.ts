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
    this.meta.updateTag({ property: 'og:title', content: 'KTB Mission | เข้าเล่นเกมวันนี้ ลุ้นรับคูปองส่วนลดมากมาย' });
    this.meta.updateTag({ property: 'og:description', content: 'ชวนเพื่อนมาเล่นตอนนี้เลย' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'https://nebtry-new.github.io/poc-mission/' });
    this.meta.updateTag({ property: 'og:image', content: 'https://mission-static-file-uat.storage.googleapis.com/mock/reward-coupon.png' });

    if (window.location.pathname.includes('/abc')) {
      this.msg = 'redirect..';
      window.location.href =
        'https://storage.googleapis.com/paotang-static-file/DEEPLINK/paotang-external-deeplink.html?openExternalBrowser=1&destination=missionWeb';
    } else if (window.location.pathname.includes('/xyz')) {
      this.meta.updateTag({ property: 'og:title', content: 'KTB Mission | เข้าเล่นเกมวันนี้ ลุ้นรับคูปองส่วนลดมากมาย' });
    this.meta.updateTag({ property: 'og:description', content: 'เพียงจ่ายบิลครบ2ครั้ง รับไปคูปองส่วนลด50บาท' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({ property: 'og:url', content: 'https://nebtry-new.github.io/poc-mission/xyz' });
    this.meta.updateTag({ property: 'og:image', content: 'https://mission-static-file-sit.storage.googleapis.com/mock/spending-count-campaign/paybill3.png' });
      this.msg = 'redirect..';
      window.location.href =
        'https://storage.googleapis.com/paotang-static-file/DEEPLINK/paotang-external-deeplink.html?openExternalBrowser=1&destination=missionWeb&page=tracking&campaignCode=00000000-0000-0000-0000-0000000ca003';
    } else {
      this.msg = 'invalid url';
    }
  }
}
