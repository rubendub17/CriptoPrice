import { Component, OnInit } from '@angular/core';
import { PriceFetchService } from '../price-fetch.service';
import { Coin } from '../coin';

import { fadeAnimation, listAnimation} from 'src/app/animation'
import { animation } from '@angular/animations';
import { async } from 'rxjs/internal/scheduler/async';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [fadeAnimation, listAnimation]
})

export class DashboardComponent implements OnInit {

  public val:number = 9;

  public coins:Coin[] = [];


  constructor(
    public priceFetch:PriceFetchService
    ) { }


  ngOnInit(): void {
    // relaciona o array ao behaviur subject
    this.priceFetch.itemsB$.subscribe(items => this.coins = items);
  }

  getcoins(){
    // clear the coin search and gets new coins
    this.priceFetch.clearCoins();
    this.priceFetch.getCoins(this.val);
  }



}
