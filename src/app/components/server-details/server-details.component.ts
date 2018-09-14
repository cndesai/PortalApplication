import { Component, OnInit } from '@angular/core';
import { ServerdetailsService } from '../../services/serverdetails/serverdetails.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'server-details',
  templateUrl: '../integration-services/integration-services.component.html',
  styleUrls: ['./server-details.component.css'],
  providers: [ServerdetailsService]
})

export class ServerDetailsComponent implements OnInit {

  public showDiv1: boolean;

  public serverdata;
  private sservice: ServerdetailsService;

  constructor(pservice: ServerdetailsService) {
    this.sservice = pservice;
  }

  ngOnInit() {
    this.getServerdetails();
  }

  getServerdetails() {
    this.sservice.getServerDetails().subscribe(
      data => {
        this.serverdata = data;
      },
      err => console.error(err),
      () => console.log("ServerDetails Service Executed Successfully!!")
    );

    this.showDiv1 = true;
  }
}
