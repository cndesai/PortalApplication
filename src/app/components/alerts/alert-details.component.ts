import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../../services/alerts/alerts.service';
import { Alert } from '../../services/models/Alert';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-alert-details',
  templateUrl: './alert-details.component.html',
  styleUrls: ['./alert-details.component.css'],
  providers: [AlertsService]
})
export class AlertDetailsComponent implements OnInit {

  private alertsSvc: AlertsService;
  private alertRecord: Alert;
  id: number;

  constructor(private pService: AlertsService, private _route: ActivatedRoute) {
    this.alertsSvc = pService;
  }

  ngOnInit() {

    console.log("AlertDetailsComponent called");

    this._route.params.subscribe(
      (params) => this.id = params["id"]
    );

    this.getAlertDetailsById(this.id);
  }

  getAlertDetailsById(id: number) {

    this.pService.getAlertDetailsById(id).subscribe(
      data => {
        this.alertRecord = data;
      },
      err => console.error(err),
      () => console.log("Service Executed Successfully")
    );
  }

}
