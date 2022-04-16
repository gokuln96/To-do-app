import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { FilterCustomPipe } from './filter-custom.pipe';
import { CheckboxDirective } from './checkbox.directive';
import { HighlightButtonDirective } from './highlight-button.directive';
import { DragDropModule } from '@angular/cdk/drag-drop'
import { RouterModule } from '@angular/router';
import { LoginComponent } from './Login/login/login.component';
import { TodoHomeComponent } from './Todo-home/todo-home/todo-home.component';
import { AuthGuardService } from './Services/auth-guard.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginInterceptorService } from './Services/login-interceptor.service';

const routes = [{
  path:'login',component:LoginComponent
},{
  path:'home',component:TodoHomeComponent,canActivate:[AuthGuardService]
},
{
  path:'', redirectTo:'/login',pathMatch:'full'
}]
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    FilterCustomPipe,
    CheckboxDirective,
    HighlightButtonDirective,
    LoginComponent,
    TodoHomeComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    DragDropModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,
    useClass:LoginInterceptorService,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
