import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-evaluation-entry',
  templateUrl: './evaluation-entry.component.html',
  styleUrls: ['./evaluation-entry.component.scss']
})
export class EvaluationEntryComponent implements OnInit {

  pageTitle: string = "Add Evaluation";

  categoryCtrl: FormControl = new FormControl(null, Validators.required);
  courseCtrl: FormControl = new FormControl(null, Validators.required);
  dueDateCtrl: FormControl = new FormControl(null, Validators.required);
  urlCtrl: FormControl = new FormControl(null, [
    Validators.required,
    //Validators.pattern('(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:\/?#[\]@!$&\'()*+,;=.]+')
  ]);
  descriptionCtrl: FormControl = new FormControl(null, Validators.maxLength(800));

  entryGroup: FormGroup = new FormGroup({
    category: this.categoryCtrl,
    course: this.courseCtrl,
    dueDate: this.dueDateCtrl,
    url: this.urlCtrl,
    description: this.descriptionCtrl
  });

  constructor(
    private datastore: DatastoreService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onSubmit(event: Event) {
    if(this.entryGroup.valid) {
      var dateFormat = { year: '2-digit', month: '2-digit', day: '2-digit' };
      var SnackBarMessage = `This ${this.courseCtrl.value} ${this.categoryCtrl.value} was successfully added!`;
      
      this.datastore.addEvaluation(`${this.courseCtrl.value}|${this.categoryCtrl.value}|${this.dueDateCtrl.value.toLocaleDateString("en-US", dateFormat)}|${this.urlCtrl.value}|${this.descriptionCtrl.value}`);
      this.snackBar.open(SnackBarMessage, '', { 
        duration: 2500
      });
      (event.currentTarget as HTMLFormElement).reset();
    }
  }
}
