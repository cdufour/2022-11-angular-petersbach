import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { ExosModule } from './exos/exos.module';
import { StudentsComponent } from './students/students.component';
import { ChoiceComponent } from './choice/choice.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentCardComponent } from './student-card/student-card.component';
import { AscComComponent } from './asc-com/asc-com.component';
import { TodoModule } from './todo/todo.module';
import { RformComponent } from './rform/rform.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DemoRouteModule } from './demo-route/demo-route.module';
import { SummaryPipe } from './summary.pipe';
import { CustomDirective } from './custom.directive';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    StudentsComponent,
    ChoiceComponent,
    StudentListComponent,
    StudentCardComponent,
    AscComComponent,
    RformComponent,
    SummaryPipe,
    CustomDirective
  ],
  imports: [
    BrowserModule,
    ExosModule,
    TodoModule,
    ReactiveFormsModule,
    DemoRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
