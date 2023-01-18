import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { SlipComponent } from './components/slip/slip.component';

const routers: Routes = [
  {
    path: '',
    component: SlipComponent
  },
  {
    path: '**',
    component: RedirectComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routers),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
