import { Component, OnInit } from '@angular/core';
import { Shop } from 'src/app/entity/shop/shop';
import { ShopService } from 'src/app/service/shop/shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  purchases:any[]=[];

  constructor(
    private shopService:ShopService
  ) { }

  ngOnInit() {
    this.getShops();
  }

  getShops(){
    this.shopService.getShop().subscribe(
      (res) => {
        if (res.shops) {
          this.purchases = res.shops;
        }
        console.log("RES",res);
        console.log("Puerchase",this.purchases);
      }
    )

  }

}
