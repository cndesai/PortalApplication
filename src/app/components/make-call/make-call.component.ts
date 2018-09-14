import { Component, OnInit } from '@angular/core';
import { MakeCallServiceService } from '../../services/makecall/make-call-service.service';

@Component({
  selector: 'makecall',
  templateUrl: '../integration-services/integration-services.component.html',
  styleUrls: ['./make-call.component.css'],
  providers: [MakeCallServiceService]
})
export class MakeCallComponent implements OnInit {

  public makeCallSvc: MakeCallServiceService;

  constructor(makeCallSvc: MakeCallServiceService) {
    this.makeCallSvc = makeCallSvc;
  }

  ngOnInit() {
    this.makeCall();
  }

  makeCall() {
    console.log("Calling...");
    this.makeCallSvc.makeCall('+17323191579', '+15153734791');
    // this.makeCallSvc.makeCall('+918411841951', '+15153734791');
  }

}
