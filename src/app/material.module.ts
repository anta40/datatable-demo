import {NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatTableModule, MatToolbarModule, MatPaginatorModule, MatSortModule } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';

@NgModule({
imports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTableDataSource],
exports: [CommonModule, MatToolbarModule, MatInputModule, MatTableModule, MatPaginatorModule, MatSortModule, MatTableDataSource],
})

export class CustomMaterialModule { }
