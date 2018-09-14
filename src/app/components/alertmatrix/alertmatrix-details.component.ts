import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AlertmatrixService } from '../../services/alertmatrix/alertmatrix.service';
import { AlertMatrix } from '../../services/models/AlertMatrix';

@Component({
  selector: 'alertmatrix-details',
  templateUrl: './alertmatrix-details.component.html',
  styleUrls: ['./alertmatrix-details.component.css'],
  providers: [AlertmatrixService]
})
export class AlertmatrixDetailsComponent implements OnInit {

  private amservice: AlertmatrixService;
  private alertMatrixRecord: AlertMatrix;
  id: number;

  constructor(private pService: AlertmatrixService, private _route: ActivatedRoute) {
    this.amservice = pService;
  }

  ngOnInit() {

    console.log("AlertmatrixDetailsComponent called");

    this._route.params.subscribe(
      (params) => this.id = params["id"]
    );

    this.getAlertMatrixDetailsById(this.id);
  }

  getAlertMatrixDetailsById(id: number) {

    this.amservice.getAlertMatrixDetailsById(id).subscribe(
      data => {
        this.alertMatrixRecord = data;
      },
      err => console.error(err),
      () => console.log("Service Executed Successfully")
    );
  }
}
