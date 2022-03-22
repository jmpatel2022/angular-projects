import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import {PostsRoutingModule} from './posts-routing.module';
import { PostsComponent } from './posts.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, PostsRoutingModule, RouterModule, ScullyLibModule],
})
export class PostsModule {}
