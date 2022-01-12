import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DatastoreService } from '../datastore.service';
import { DescriptionDialogComponent } from '../description-dialog/description-dialog.component';

@Component({
  selector: 'app-evaluation-list',
  templateUrl: './evaluation-list.component.html',
  styleUrls: ['./evaluation-list.component.scss']
})
export class EvaluationListComponent implements OnInit {

  pageTitle: string = "My Evaluations";

  displayedColumns: string[] = ['category', 'due-date', 'url', 'description', 'done'];
  dataSource = this.datastore.getEvaluations();

  constructor(
    public datastore: DatastoreService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  onItemClick(index: number) {
    var SnackBarMessage = 'Evaluation marked as done! Please check the Completed Evaluations.';

    this.datastore.removeEvaluation(index);

    this.snackBar.open(SnackBarMessage, '' ,{ 
      duration: 2500
    });

    setTimeout(() => location.reload(), 2500);
  }

  openDialog(description: string) {
    this.dialog.open(DescriptionDialogComponent, {data: {info: description}});
  }

}
