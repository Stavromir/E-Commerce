import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MatTableModule} from '@angular/material/table';
import {MatMenuModule} from '@angular/material/menu';
@NgModule({
    exports: [
        MatToolbarModule,
        MatButtonModule, 
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        FormsModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatListModule, 
        MatDividerModule,
        MatDialogModule,
        MatDatepickerModule,
        MatTableModule,
        MatMenuModule,
    ]
})

export class AngularMaterialModul {

}