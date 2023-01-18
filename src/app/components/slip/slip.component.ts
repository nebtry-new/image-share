/* eslint-disable @typescript-eslint/no-inferrable-types */
import { Component } from '@angular/core';
import html2canvas from 'html2canvas';
import { JsInterfaceService } from 'src/app/js-interface.service';

@Component({
  selector: 'image-share-slip',
  templateUrl: './slip.component.html',
  styleUrls: ['./slip.component.scss'],
})
export class SlipComponent  {
  title = 'image-share';
  imageBase64: string = '';
  
  constructor(public jsInterface: JsInterfaceService, ) {}

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
