import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { JsInterfaceService } from './js-interface.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [JsInterfaceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
