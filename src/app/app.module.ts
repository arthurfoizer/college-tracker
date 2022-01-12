import { NgModule } from '@angular/core';

// Declarations
import { AppComponent } from './app.component';
import { EvaluationEntryComponent } from './evaluation-entry/evaluation-entry.component';
import { EvaluationListComponent } from './evaluation-list/evaluation-list.component';
import { DoneEvaluationsComponent } from './done-evaluations/done-evaluations.component';
import { DescriptionDialogComponent } from './description-dialog/description-dialog.component';

// Imports
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDividerModule } from '@angular/material/divider';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    EvaluationEntryComponent,
    EvaluationListComponent,
    DoneEvaluationsComponent,
    DescriptionDialogComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatTableModule,
    MatDatepickerModule,
    MatRadioModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    MatExpansionModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
