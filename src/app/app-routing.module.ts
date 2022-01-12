import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EvaluationEntryComponent } from './evaluation-entry/evaluation-entry.component';
import { EvaluationListComponent } from './evaluation-list/evaluation-list.component';
import { DoneEvaluationsComponent } from './done-evaluations/done-evaluations.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'entry',
    component: EvaluationEntryComponent
  },
  {
    path: '',
    redirectTo: 'entry',
    pathMatch: 'full'
  },
  {
    path: 'list',
    component: EvaluationListComponent
  },
  {
    path: 'done',
    component: DoneEvaluationsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
