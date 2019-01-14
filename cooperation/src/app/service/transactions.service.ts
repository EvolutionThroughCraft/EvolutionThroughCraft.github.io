import { Injectable } from '@angular/core';
import { Transaction } from '../classes/transaction';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  constructor(private httpService : HttpClient) { }

  /// TODO, URL from config service

  public getTransactions()
  {
    return this.httpService.get<Transaction[]>("http://www.mocky.io/v2/5c3c01ee3100006e00a1a14e");
  }

  public getTransactionsByAccountId(id : number)
  {
//    // mock
//    transactions: Transaction[];
//    this.getTransactions.getAccounts().subscribe(
//      (data: Transaction[]) => transactions = data);
//
//    var matchingTransactions = transactions.filter(account =>
//       account.recipientId == id || account.donorId == id
//    );

  //  return matchingTransactions;
  }


}
