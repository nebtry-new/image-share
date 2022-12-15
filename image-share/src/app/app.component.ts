import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { JsInterfaceService } from './js-interface.service';
import html2canvas from "html2canvas";
@Component({
  selector: 'image-share-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'image-share';
  imageBase64: string = '';
  constructor(public jsInterface: JsInterfaceService, ) {}

  ngOnInit() {}

  async onSave(): Promise<void> {
    this.imageBase64 = await this.onExportImage('slip');
    this.jsInterface.saveImageEvent(this.imageBase64);
  }

  async onShare(): Promise<void> {
    this.imageBase64 = await this.onExportImage('slip');
    this.jsInterface.shareImageEvent(this.imageBase64);
  }

  async onExportImage(elemId: string): Promise<string> {
    if (this.imageBase64.length === 0) {
      let el = document.querySelector(`#${elemId}`) as HTMLElement;
      let options = {
        logging: true,
        useCORS: true
      };
      const canvas = await html2canvas(el, options);
      const data = canvas.toDataURL().replace(/data:image\/[a-zA-Z]+;base64\,/, "");
      // console.log(data);
      return data;
    } else {
      return this.imageBase64;
    }
  }
}
