import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Log, LogService } from '../../serveice/log.service';
import { CommonModule } from '@angular/common';
//import Tabulator from 'tabulator-tables';
import { Tabulator } from 'tabulator-tables'; // For named import


@Component({
  selector: 'app-log',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './log.component.html',
  styleUrl: './log.component.css'
})
export class LogComponent implements OnInit {

  logs: Log[] = [];
  isLoading = true;
  @ViewChild('tabulatorTable', { static: true }) tabulatorTable!: ElementRef;

  constructor(private logservice: LogService) {}
  ngOnInit(): void {
   console.log("i ma inside on init");
   this.getLogs();
  }



  // Method to fetch logs on initialization
  getLogs() {
  console.log("hi")
  this.logservice.fetchLogs().subscribe(
    response=>{
alert(response.length)
this.logs=response;
this.initializeTabulator();
    }
  );
  }
  initializeTabulator() {
    new Tabulator(this.tabulatorTable.nativeElement, {
      data: this.logs, // Set the data
      layout: "fitColumns", // Automatically fit columns
      columns: [
        { title: "ID", field: "id",sorter: "number", sortable: true },
        { title: "Function", field: "function" },
        { title: "Timestamp", field: "timestamp" },
        { title: "Severity", field: "severity" },
        { title: "Message", field: "msg" }
      ]
    });
  }
}
