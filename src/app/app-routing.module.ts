import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles/articles.component';
import { ContactComponent } from './contact/contact/contact.component';

const routes: Routes = [
  { path: 'contact', component: ContactComponent },
  { path: 'articles', loadChildren: () => import('./articles/articles.module').then (m => m.ArticlesModule)},
  { path: '', pathMatch: 'full', redirectTo: 'articles' },
// { path: 'articles', component: ArticlesComponent },
{ path: '**', redirectTo: 'articles' },
  { path: 'posts', loadChildren: () => import('./posts/posts.module').then(m => m.PostsModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


