// // src/app/bill-comm-hub.service.ts
// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';

// export interface Log {
//   id: number;
//   function: string;
//   timestamp: string;
//   severity: string;
//   msg: string;
// }

// @Injectable({
//   providedIn: 'root',
// })
// export class BillCommHubService {
//   private apiUrl = 'http://your-api-endpoint.com/api/logs'; // Replace with your actual API endpoint

//   constructor(private http: HttpClient) {}

//   // Method to fetch logs from the API
//   fetchLogs(): Observable<Log[]> {
//     return this.http.get<Log[]>(this.apiUrl);
//   }
// }


// src/app/bill-comm-hub-dashboard.service.ts
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Log {
  id: number;
  function: string;
  timestamp: string;
  severity: string;
  msg: string;
}

@Injectable({
  providedIn: 'root',
})
export class LogService {
  // Mock data as static content
  private logs: Log[] = [
    {
      id: 1,
      function: 'Order Processing',
      timestamp: '2024-09-30T10:15:30',
      severity: 'Info',
      msg: 'Order processed successfully',
    },
    {
      id: 2,
      function: 'Inventory Update',
      timestamp: '2024-09-30T11:00:00',
      severity: 'Warning',
      msg: 'Low stock warning',
    },
    {
      id: 3,
      function: 'Order Fulfillment',
      timestamp: '2024-09-30T12:45:00',
      severity: 'Error',
      msg: 'Order fulfillment failed',
    },
  ];

  // Method to return mock data instead of calling an API
  fetchLogs(): Observable<Log[]> {
    return of(this.logs); // Returns an Observable with the static data
  }
}
