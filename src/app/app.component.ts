import { Component } from '@angular/core';
import { MatPaginator, MatTable } from '@angular/material';
import { MatPaginatorModule, MatSortModule, MatSort } from '@angular/material';
import { MatTableDataSource } from '@angular/material/table';
import { AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {
  title = 'app';
  displayedColumns = ['position', 'firstName', 'lastName', 'email'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  rowClicked(row: any): void {
    window.alert(row['firstname']);
  }
}

export interface Element {
  position: number;
  firstName: string;
  lastName: string;
  email: string;
}

const ELEMENT_DATA: Element[] = [
  {position: 1, firstName: 'John', lastName: 'Doe', email: 'john@gmail.com'},
  {position: 2, firstName: 'Mike', lastName: 'Hussey', email: 'mike@gmail.com'},
  {position: 3, firstName: 'Ricky', lastName: 'Hans', email: 'ricky@gmail.com'},
  {position: 4, firstName: 'Martin', lastName: 'Kos', email: 'martin@gmail.com'},
  {position: 5, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com'},
  {position: 6, firstName: 'Linus', lastName: 'Torvalds', email: 'linus@gmail.com'},
  {position: 7, firstName: 'Dennis', lastName: 'Ritchie', email: 'dennis@gmail.com'},
  {position: 8, firstName: 'Bjarne', lastName: 'Stroustrup', email: 'bjarne@gmail.com'},
  {position: 9, firstName: 'Larry', lastName: 'Wall', email: 'larry@gmail.com'},
  {position: 10, firstName: 'Guido', lastName: 'van Rossum', email: 'guido@gmail.com'},
  {position: 11, firstName: 'Dave', lastName: 'Cutler', email: 'dave@gmail.com'},
  {position: 12, firstName: 'Jochen', lastName: 'Liedtke', email: 'jochen@gmail.com'},
  {position: 13, firstName: 'Theo', lastName: 'de Raadt', email: 'theo@gmail.com'},
  {position: 14, firstName: 'Yukihiro', lastName: 'Matsumoto', email: 'yukihiro@gmail.com'}
];
