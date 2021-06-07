import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'primeng/chart';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GradePiechartComponent } from './components/grade-piechart/grade-piechart.component';
import { GradeListComponent } from './components/grade-list/grade-list.component';

@NgModule({
  declarations: [
    AppComponent,
    GradePiechartComponent,
    GradeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
