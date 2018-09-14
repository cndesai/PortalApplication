import { Component, OnInit } from '@angular/core';
import { AlertmatrixService } from '../../services/alertmatrix/alertmatrix.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'alertmatrix',
  templateUrl: '../integration-services/integration-services.component.html',
  styleUrls: ['./alertmatrix.component.css'],
  providers: [AlertmatrixService]
})
export class AlertmatrixComponent implements OnInit {

  public showDiv2: boolean;

  public alertmatrixdata;
  private amservice: AlertmatrixService;

  constructor(pService: AlertmatrixService) {
    this.amservice = pService;
  }

  ngOnInit() {
    this.getAlertMatrixDetails();
  }

  getAlertMatrixDetails() {
    this.amservice.getAllAlertMatrixDetails().subscribe(
      data => {
        this.alertmatrixdata = data;
        // console.log(this.alertmatrixdata);
      },
      err => console.error(err),
      () => console.log("AlertMatrix Service Executed Successfully!!")
    );

    this.showDiv2 = true;
  }
}
