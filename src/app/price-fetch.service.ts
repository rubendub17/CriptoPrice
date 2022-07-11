import { Injectable, Type } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Coin } from './coin';



@Injectable({
  providedIn: 'root',
})
export class PriceFetchService {
  constructor(private http: HttpClient) {}

  public getCoins() {
    let coins: Coin[] = [];

    this.http.get<any>('https://api.coincap.io/v2/assets').subscribe((json) => {
      for (let rawData of json.data) {
        let coin: Coin = {
          name: rawData.id,
          rank: rawData.rank,
          priceUsd: rawData.priceUsd,
          changePercent24Hr: rawData.changePercent24Hr,
          supply: rawData.supply,
          marketCap: rawData.marketCapUsd
        };
        coins.push(coin);
      }
    });
    return coins;
  }
}
