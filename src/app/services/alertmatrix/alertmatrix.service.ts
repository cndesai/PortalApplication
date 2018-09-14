import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertMatrix } from '../models/AlertMatrix';
import { Observable } from 'rxjs/Observable';

/* The interface is required to convert the data from the get query into the type we want. In this case the results
	is going to be of ServerInfo type so in the interface we define the same */

interface AlertMatrixdata {
	records: AlertMatrix[];
}

@Injectable()
export class AlertmatrixService {

	constructor(private http: HttpClient) { }

	getAllAlertMatrixDetails(): Observable<AlertMatrix[]> {

		return this.http.get<AlertMatrixdata>('http://localhost:8181/isghubsvc/getAlertMatrix')
			.map(res => <AlertMatrix[]>res.records);
	}

	getAlertMatrixDetailsById(id: number): Observable<AlertMatrix> {

		return this.http.get<AlertMatrixdata>('http://localhost:8181/isghubsvc/getAlertMatrix')
			.map(res => <AlertMatrix[]>res.records)
			.map(res => res.find(elem => elem.Id == id));
	}
}
