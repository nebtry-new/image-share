import { Component, OnInit } from '@angular/core';
import { JsInterfaceService } from './js-interface.service';

@Component({
  selector: 'image-share-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'image-share';
  constructor(public jsInterface: JsInterfaceService) {}

  ngOnInit(): void {
    this.jsInterface.saveImageEvent('base64image');
  }

  onShare() {
    this.jsInterface.shareImageEvent('base64image');
  }
}
