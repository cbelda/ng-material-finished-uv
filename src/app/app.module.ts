import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { MatButtonModule, MatCheckboxModule, MatToolbarModule } from '@angular/material';
import { HeaderComponent } from './header/header.component';
import { CardComponent } from './card/card.component';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent, DialogOverviewExampleDialogComponent } from './dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material';
import { PelisComponent } from './pelis/pelis.component';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { PelisService } from './shared/pelis.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CardComponent,
    DialogComponent,
    DialogOverviewExampleDialogComponent,
    PelisComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatListModule,
    HttpClientModule
  ],
  providers: [
    PelisService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogOverviewExampleDialogComponent
  ]
})
export class AppModule { }
