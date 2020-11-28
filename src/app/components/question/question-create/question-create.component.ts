import { Question } from './../question.model';
import { QuestionService } from './../question.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface AnswerType{
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.css']
})
export class QuestionCreateComponent implements OnInit {

  question: Question = {
    quizType: "",
    question: "",
    answerType: "",
    choices: [
      ""
    ],
    answers: [
      1
    ]
  }

  answerTypes: AnswerType[] = [
    {value: "SINGLE_CHOICE", viewValue: "Única escolha"},
    {value: "MULTIPLE_CHOICE", viewValue: "Múltipla escolha"},
    {value: "WRITING_CHOICE", viewValue: "Escrita"}
  ]

  constructor(
    private questionService: QuestionService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createQuestion(): void {
    console.log(this.question)
    this.questionService.create(this.question).subscribe(() =>{
      this.questionService.showMessage('deu certo porra')
      this.router.navigate(['/questions'])
    })
  }

  cancel(): void {
    this.router.navigate(['/questions'])
  }

  trackByFn(index: any, item: any) {
    return index;
 }

 click(){
  this.question.choices.push("");
}

numSequence(number: number): Array<number>{
  return Array(number);
}

}
