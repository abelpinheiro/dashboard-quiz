import { Question } from './../question.model';
import { QuestionService } from './../question.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question-create',
  templateUrl: './question-create.component.html',
  styleUrls: ['./question-create.component.css']
})
export class QuestionCreateComponent implements OnInit {

  question: Question = {
    quizType: "science",
    question: "Quem foi a primeira mulher a ganhar o prêmio Nobel?",
    answerType: "SINGLE_CHOICE",
    choices: [
      "Ada Lovelace",
      "Marie Curie",
      "Grace Hopper",
      "Mae Jemison"
    ],
    answers: [
      1
    ]
  }

  constructor(
    private questionService: QuestionService,
    private router: Router) { }

  ngOnInit(): void {
  }

  createQuestion(): void {
    this.questionService.create(this.question).subscribe(() =>{
      this.questionService.showMessage('deu certo porra')
      this.router.navigate(['/questions'])
    })
  }

  cancel(): void {
    this.router.navigate(['/questions'])
  }

}
