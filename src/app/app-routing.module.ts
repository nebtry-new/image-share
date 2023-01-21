import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { RedirectComponent } from './components/redirect/redirect.component';
import { SlipComponent } from './components/slip/slip.component';

export const sectionsMetadata = {
  slip: {
    data: {
      title: 'First Page',
      description: 'Start with description'
    }
  },
  redirect: {
    data: {
      title: 'Redirect Page...',
      description: 'Can be friendly with SEO?'
    }
  }
}
const routers: Routes = [
  {
    path: '',
    data: sectionsMetadata.slip,
    component: SlipComponent
  },
  {
    path: '**',
    data: sectionsMetadata.redirect,
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
