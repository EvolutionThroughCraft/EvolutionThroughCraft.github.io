import { Injectable } from '@angular/core';
import { Account } from '../classes/account';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  constructor(private httpService : HttpClient) { }

  /// TODO, URL from config service

  public getAccounts()
  {
    return this.httpService.get<Account[]>("http://www.mocky.io/v2/5c2696e930000060000bf65a");
  }
}
