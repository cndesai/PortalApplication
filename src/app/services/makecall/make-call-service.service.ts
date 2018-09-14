import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MakeCallServiceService {

  constructor(private http: HttpClient) { }

  makeCall(ownNumber: string, salesNumber: string) {

    // const httpOptions = {
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //     'host': 'localhost'
    //   })
    // };

    // console.log('ownNumber --- ' + ownNumber + ' ###### ' + ' salesNumber -- ' + salesNumber);

    var bodyParams = { phoneNumber: ownNumber, salesNumber: salesNumber };

    /* let body = new FormData();
    body.append('phoneNumber', ownNumber);
    body.append('salesNumber', salesNumber); */

    let body = new HttpParams();
    body = body.set('phoneNumber', ownNumber);
    body = body.set('salesNumber', salesNumber);

    return this.http.post('http://a19b991b.ngrok.io/call', body)
      .subscribe(res => console.log(res));
  }
}
