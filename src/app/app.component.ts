import { Component } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatTable } from '@angular/material';
import { MatPaginatorModule, MatSortModule, MatSort } from '@angular/material';
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
  {position: 5, firstName: 'Tom', lastName: 'Paisa', email: 'tom@gmail.com'}
];
