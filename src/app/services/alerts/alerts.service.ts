import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alert } from '../models/Alert';
import { Observable } from 'rxjs/Observable';

interface AlertsData {
  records: Alert[];
}

@Injectable({
  providedIn: 'root'
})
export class AlertsService {

  constructor(private http: HttpClient) { }

  getAllAlertDetails(): Observable<Alert[]> {

    return this.http.get<AlertsData>('http://localhost:8081/isghubsvc/getAlertNotifications')
      .map(res => <Alert[]>res.records);
  }

  getAlertDetailsById(compId: number): Observable<Alert> {

    return this.http.get<AlertsData>('http://localhost:8081/isghubsvc/getAlertNotifications')
      .map(res => <Alert[]>res.records)
      .map(res => res.find(elem => elem.CompId == compId));
  }
}
