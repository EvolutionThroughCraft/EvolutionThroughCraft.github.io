import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
//import { AccountComponent } from './account/account.component';
import { TransactionComponent } from './transaction/transaction.component';
import { AccountsComponent } from './accounts/accounts.component';

@NgModule({
  declarations: [
    AppComponent,
//    AccountComponent,
    TransactionComponent,
AccountsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
