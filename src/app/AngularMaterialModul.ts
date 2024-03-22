import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    exports: [
        MatToolbarModule,
        MatButtonModule, 
        MatIconModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
    ]
})

export class AngularMaterialModul {

}