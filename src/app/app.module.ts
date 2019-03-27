import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridContainerDirective } from './directives/container/grid-container.directive';
import { ColumnDirective } from './directives/column/column.directive';
import { MergeRowsDirective } from './directives/merge-rows/merge-rows.directive';
import { NestedGridDirective } from './directives/nested-grid/nested-grid.directive';

@NgModule({
  declarations: [
    AppComponent,
    GridContainerDirective,
    ColumnDirective,
    MergeRowsDirective,
    NestedGridDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
