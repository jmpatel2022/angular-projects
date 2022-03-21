import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles/articles.component';
import { ContactComponent } from './contact/contact/contact.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'articles', component: ArticlesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
