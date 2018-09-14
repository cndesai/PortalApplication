import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ServerInfo } from '../models/ServerInfo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

const httpOptions = {
	headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

/* The interface is required to convert the data from the get query into the type we want. In this case the results
	is going to be of ServerInfo type so in the interface we define the same */

interface Servers {
	records: ServerInfo[];
}

@Injectable()

export class ServerdetailsService {

	constructor(private http: HttpClient) { }

	/** getServerDetails() {
		return this.http.get('http://localhost:8200/api/ServerManagement');
	} */

	getServerDetails(): Observable<ServerInfo[]> {
		return this.http.get<Servers>('http://localhost:8181/isghubsvc/getServerDetails').map(res => <ServerInfo[]>res.records);
	}

	getServerDetailsById(id: number): Observable<ServerInfo> {

		console.log("ID -- " + id);
		// return Observable.of(this.alertMatrixRecords.find(rec => rec.Id == id));

		return this.http.get<Servers>('http://localhost:8181/isghubsvc/getServerDetails')
			.map(res => <ServerInfo[]>res.records)
			.map(res => res.find(elem => elem.ServerId == id));
	}
}
