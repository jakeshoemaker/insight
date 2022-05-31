import { Component, AfterViewInit } from '@angular/core';
import { NgxPlaidLinkService, PlaidConfig, PlaidEventMetadata, PlaidLinkHandler, PlaidSuccessMetadata } from 'ngx-plaid-link';
import PlaidLinkTokenResponse from 'src/core/interfaces/interfaces';
import { PlaidLinkTokenService } from 'src/services/plaid-link-token-service';

@Component({
  selector: 'app-plaid-link-setup',
  templateUrl: './plaid-link-setup.component.html',
  styleUrls: ['./plaid-link-setup.component.css']
})
export class PlaidLinkSetupComponent implements AfterViewInit {
  private plaidLinkHandler: PlaidLinkHandler;
  private config: PlaidConfig = {
    apiVersion: 'v2',
    env: 'sandbox',
    product: ['auth'],
    key: '',
    token: '',
    onSuccess: this.onSuccess,
    onExit: this.onExit,
    onEvent: this.onEvent
  };

  constructor(
    private plaidLinkService: NgxPlaidLinkService,
    private plaidLinkTokenService: PlaidLinkTokenService) { }

  ngAfterViewInit(): void {
    this.plaidLinkTokenService.getLinkToken().subscribe((data: PlaidLinkTokenResponse) => {
      this.config.token = data.link_token
      console.log(data);
      this.plaidLinkService.createPlaid(this.config)
        .then((handler: PlaidLinkHandler) => {
        this.plaidLinkHandler = handler;
        this.open();
      });
    });
  }
 
  open() {
    this.plaidLinkHandler.open();
  }
 
  exit() {
    this.plaidLinkHandler.exit();
  }
 
  onSuccess(token: any, metadata: any) {
    console.log("We got a token:", token);
    console.log("We got metadata:", metadata);
  }
 
  onEvent(eventName: any, metadata: any) {
    console.log("We got an event:", eventName);
    console.log("We got metadata:", metadata);
  }
 
  onExit(error: any, metadata: any) {
    console.log("We exited:", error);
    console.log("We got metadata:", metadata);
  }
}