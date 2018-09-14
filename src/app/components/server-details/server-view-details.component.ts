import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ServerdetailsService } from '../../services/serverdetails/serverdetails.service';
import { ServerInfo } from '../../services/models/ServerInfo';

@Component({
  selector: 'server-view-details',
  templateUrl: './server-view-details.component.html',
  styleUrls: ['./server-view-details.component.css']
})
export class ServerViewDetailsComponent implements OnInit {

  private serverDetailsSvc: ServerdetailsService;
  private serverInfo: ServerInfo;
  id: number;

  constructor(private pService: ServerdetailsService, private _route: ActivatedRoute) {
    this.serverDetailsSvc = pService;
  }

  ngOnInit() {

    console.log("ServerViewDetailsComponent called");

    this._route.params.subscribe(
      (params) => this.id = params["id"]
    );

    this.getServerDetailsById(this.id);
  }

  getServerDetailsById(id: number) {

    this.serverDetailsSvc.getServerDetailsById(id).subscribe(
      data => {
        this.serverInfo = data;
      },
      err => console.error(err),
      () => console.log("Server View Details Service Executed Successfully")
    );
  }
}
