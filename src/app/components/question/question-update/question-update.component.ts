import { Question } from './../question.model';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionService } from './../question.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question-update',
  templateUrl: './question-update.component.html',
  styleUrls: ['./question-update.component.css']
})
export class QuestionUpdateComponent implements OnInit, Question {

  const question: Question;

  constructor(private questionService: QuestionService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.questionService.readById(id).subscribe(question =>{
      this.question = question
    })
  }

  updateQuestion(): void{

  }

  cancel(): void{
    this.router.navigate(['/questions'])
  }
}
