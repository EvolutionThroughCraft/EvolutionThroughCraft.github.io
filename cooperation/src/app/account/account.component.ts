import { Component, OnInit } from '@angular/core';
import { Account } from '../classes/account';

// service
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private accountsService: AccountsService) { }

  accounts : Account[];

  ngOnInit() {
    this.accountsService.getAccountMock().subscribe(
      (data: Account) => this.accounts = data);
  }

}
