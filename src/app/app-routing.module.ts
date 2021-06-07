import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GradePiechartComponent } from './components/grade-piechart/grade-piechart.component';
import { GradeListComponent } from './components/grade-list/grade-list.component';

const routes: Routes = [
  { path:'', redirectTo:'chart', pathMatch:'full' },
  { path:'chart', component: GradePiechartComponent },
  { path:'list', component: GradeListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
