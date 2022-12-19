import { Injectable } from '@angular/core';

export interface JavascriptCallback {
  saveImageEvent(data: any): any;
  shareImageEvent(data: any): any;
}

declare const android: JavascriptCallback;
declare const window: any;
declare const webkit: any;

@Injectable({
  providedIn: 'root',
})
export class JsInterfaceService {
  public saveImageEvent(data: string) {
    console.log('saveImageEvent', data);

    const body = JSON.stringify(data);
    const ua = navigator.userAgent.toLowerCase();
    const isAndroid = ua.indexOf('android') > -1;
    try {
      if (isAndroid) {
        console.log('isAndroid');
        android.saveImageEvent(body);
      } else {
        window.webkit.messageHandlers.saveImageEvent.postMessage(body);
      }
    } catch (error) {
      console.log('isWeb');
    }
  }

  public shareImageEvent(data: string) {
    console.log('shareImageEvent', data);

    const body = JSON.stringify(data);
    const ua = navigator.userAgent.toLowerCase();
    const isAndroid = ua.indexOf('android') > -1;
    try {
      if (isAndroid) {
        console.log('isAndroid');
        android.shareImageEvent(body);
      } else {
        window.webkit.messageHandlers.shareImageEvent.postMessage(body);
      }
    } catch (error) {
      console.log('isWeb');
    }
  }
}
