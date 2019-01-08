import { Component, OnInit } from '@angular/core';
import { Account } from '../classes/account';
import { AccountsService } from '../service/accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor(private accountsService: AccountsService)
  {


  }

  accounts : Account[];

  ngOnInit() {
    this.accountsService.getAccounts().subscribe(
      (data: Account[]) => this.accounts = data);
  }

}
