import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component';

const routes: Routes = [
  {
    path: '',
    component: IndexComponent,
  },
  {
    path: 'list',
    component: ListComponent,
  },
  {
    path: 'list/:index',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
