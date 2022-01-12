import { isNull } from '@angular/compiler/src/output/output_ast';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class DatastoreService {

  private data: string[] = [];
  private evaluations: string[][]= [];
  public done: string[] = [];
  public ogDone: string[] = [];

  constructor() {
    const savedData = window.localStorage.getItem('evaluationArray');
    const savedDone = window.localStorage.getItem('doneArray');

    if(savedData !== null) {
      this.evaluations = JSON.parse(savedData);
    }

    if(savedDone !== null) {
      this.done = JSON.parse(savedDone);
    }
   }

  addEvaluation(evaluation: string) {
    this.data = evaluation.split('|');

    this.evaluations.push([this.data[0], this.data[1], this.data[2], this.data[3], this.data[4]]);
    this.saveChanges();
  }

  hasAnyEvaluations(courseCode: string) {
    var foundIt = false;

    for(var i = 0; i < this.evaluations.length; i++) {
      if (this.evaluations[i][0] === courseCode) {
        foundIt = true;
        break;
      }
    }

    return foundIt;
  }
  

  removeEvaluation(i: number) {
    var course = this.evaluations[i][0];
    var type = this.evaluations[i][1];
    var today = new Date();

    var date = today.getFullYear() + '/' + (today.getMonth()+1) + '/' + today.getDate();

    this.addDone(course, type, date);

    this.evaluations.splice(i, 1);
    this.saveChanges();
  }

  getEvaluations() {
    return(this.evaluations);
  }

  private saveChanges() {
    window.localStorage.setItem('evaluationArray', JSON.stringify(this.evaluations));
  }

  addDone(course: string, type: string, finishedOn: string) {
    this.done.push(`${course} ${type} - Finished on: ${finishedOn}`);
    window.localStorage.setItem('doneArray', JSON.stringify(this.done));
  }

  getDone() {
    this.ogDone = this.done;

    return(this.ogDone.reverse());
  }

  hasCompletedEvaluations() {
    var hasDone = false;

    for(var j = 0; j < this.done.length; j++) {
      if (this.done != null) {
        hasDone = true;
        break;
      }
    }

    return hasDone;
  }
}
