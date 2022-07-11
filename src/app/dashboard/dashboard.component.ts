import { Component, OnInit } from '@angular/core';
import { PriceFetchService } from '../price-fetch.service';
import { Coin } from '../coin';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  public val:number = 9;
  private coins:Coin[] = [];
  public displayCoins:Coin[] = [];



  constructor(public priceFetch:PriceFetchService) { }


  ngOnInit(): void {
    this.coins = this.priceFetch.getCoins();
  }

  counter(len:number){
    return new Array(len+1);
  }

  getSome(num:number){
    return this.coins.slice(0,num);
  }



}
