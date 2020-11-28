import { QuestionService } from './../question.service';
import { Question } from './../question.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-read',
  templateUrl: './question-read.component.html',
  styleUrls: ['./question-read.component.css']
})
export class QuestionReadComponent implements OnInit {

  questions: Question[] = []
  displayedColumns = ['id', 'quizType', 'question', 'answerType', 'choices', 'answers', 'action']

  constructor(private questionService: QuestionService) { }
  
  

  ngOnInit(): void {
    this.questionService.read().subscribe(questions =>{
      this.questions = questions["content"]
      console.log("NÓS TEM " + questions)
    })
  }

}
