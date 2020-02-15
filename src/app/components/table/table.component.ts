import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator, PageEvent } from '@angular/material';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  listData: MatTableDataSource<any>;
  displayedColumns: string[] = ['ID', 'PHONE', 'CONTENT', 'PRICE', 'STATUS', 'NAME','LAST_MONEY', 'CREATED_DATE'];
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  searchKey: string;
  chogach = 0;
  selectedValue:-1;
  pageOption = [5, 10, 25, 100];
  page = 0;
  pageSize = 100;
  length = 0;
  pageEvent: PageEvent;
  constructor() { }

  ngOnInit() {
  }

}
