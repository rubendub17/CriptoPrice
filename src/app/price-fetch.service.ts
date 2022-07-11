import { Injectable, Type } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Coin } from './coin';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class PriceFetchService {
  itemsB$ = new BehaviorSubject<Coin[]>([]);

  constructor(private http: HttpClient) {}

  addcoin(coin: Coin) {
    const list = this.itemsB$.value;
    list.push(coin);
    this.itemsB$.next(list);
  }

  clearCoins() {
    this.itemsB$.next([]);
  }

  public getCoins(value:number) {

    this.http.get<any>('https://api.coincap.io/v2/assets').subscribe((json) => {
      for (let i = 0; i < value; i++) {

        let coin: Coin = {
          name: json.data[i].name,
          rank: json.data[i].rank,
          priceUsd: json.data[i].priceUsd,
          changePercent24Hr: json.data[i].changePercent24Hr,
          supply: json.data[i].supply,
          marketCap: json.data[i].marketCapUsd,
        };
        this.addcoin(coin);
      }
    });
    
  }
}
