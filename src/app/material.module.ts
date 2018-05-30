import {NgModule} from "@angular/core";
import { CommonModule } from '@angular/common';
import { MatInputModule, MatTableModule, MatToolbarModule, MatPaginatorModule } from '@angular/material';

@NgModule({
imports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule, MatPaginatorModule],
exports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule, MatPaginatorModule],
})

export class CustomMaterialModule { }
