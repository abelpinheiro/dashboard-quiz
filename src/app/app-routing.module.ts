import { QuestionCreateComponent } from './components/question/question-create/question-create.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { QuestionCrudComponent } from './views/question-crud/question-crud.component';

const routes: Routes = [{
    path: "",
    component: HomeComponent
  },
  {
    path: "questions",
    component: QuestionCrudComponent
  },
  {
    path: "questions/create",
    component: QuestionCreateComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
