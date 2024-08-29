import { Component, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FplService } from './Services/FplService';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatFormField } from '@angular/material/form-field';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatTable],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'fpl';

  displayedColumns: string[] = ['name', 'position']; // Define columns here
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  
  constructor() {}

  ngOnInit(): void {
    fetch("https://fantasy.premierleague.com/api/bootstrap-static/")
      .then(res => res.json())
      .then((result) => {
        this.dataSource.data = result;
        let currentWeek = 1; let events = result.events; events.forEach(function (element: any) {
          if (element.finished === true) { 
            currentWeek = element.id; 
          };
        });
      });
    // this.fplService.getTeams().subscribe(data => {
    //   this.dataSource.data = data; // Replace with actual data processing
    //   this.dataSource.paginator = this.paginator;
    //   this.dataSource.sort = this.sort;
    // });
  }

  applyFilter(filterValue: string): void {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}