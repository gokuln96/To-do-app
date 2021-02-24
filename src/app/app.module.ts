import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FilterCustomPipe } from './filter-custom.pipe';
import { CheckboxDirective } from './checkbox.directive';
import { HighlightButtonDirective } from './highlight-button.directive';
import { DragDropModule } from '@angular/cdk/drag-drop'

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    FilterCustomPipe,
    CheckboxDirective,
    HighlightButtonDirective
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
