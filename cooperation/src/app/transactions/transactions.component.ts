import { Component, OnInit } from '@angular/core';
import { TransactionsService } from '../service/transactions.service';
import { Transaction } from '../classes/transaction';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  constructor(private transactionService : TransactionsService) { }

  transactions: Transaction[];

  ngOnInit() {
    this.transactionService.getTransactions().subscribe(
      (data: Transaction[]) => this.transactions = data);

  }

}
