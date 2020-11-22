import { Question } from './question.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  //baseUrl = "https://agenquiz.herokuapp.com/perguntas"
  baseUrl = "http://localhost:8080/perguntas"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X',{
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }

  create(question: Question): Observable<Question> {
    return this.http.post<Question>(this.baseUrl, question)
  } 

}
