import { Component, OnInit } from '@angular/core';
import { DatastoreService } from '../datastore.service';

@Component({
  selector: 'app-done-evaluations',
  templateUrl: './done-evaluations.component.html',
  styleUrls: ['./done-evaluations.component.scss']
})
export class DoneEvaluationsComponent implements OnInit {

  pageTitle: string = "Completed Evaluations";

  constructor(
    public datastore: DatastoreService
  ) { }

  ngOnInit(): void {
  }

}
