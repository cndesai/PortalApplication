import { Component, OnInit } from '@angular/core';
import { AlertsService } from '../../services/alerts/alerts.service';

@Component({
  selector: 'alerts',
  templateUrl: '../integration-services/integration-services.component.html',
  styleUrls: ['./alerts.component.css'],
  providers: [AlertsService]
})
export class AlertsComponent implements OnInit {

  public showDiv3: boolean;

  public alerts;
  public alertSvc: AlertsService;

  constructor(alertSvc: AlertsService) {
    this.alertSvc = alertSvc;
  }

  ngOnInit() {
    this.getAllAlertDetails();
  }

  getAllAlertDetails() {

    this.alertSvc.getAllAlertDetails().subscribe(
      data => {
        this.alerts = data;
      },
      err => console.error(err),
      () => console.log("Alerts Service Executed Successfully!!")
    );

    this.showDiv3 = true;
  }

}
