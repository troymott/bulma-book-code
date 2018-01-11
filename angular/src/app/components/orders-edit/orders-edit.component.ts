import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-orders-edit',
  templateUrl: './orders-edit.component.html',
  styleUrls: ['./orders-edit.component.scss']
})
export class OrdersEditComponent implements OnInit {
  private id: number;
  order: any;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => this.id = params['id'] || '/');
    this.order = this.dataService.getOrderById(this.id)[0];
    this.order.customerObject = this.dataService.getCustomerByName(this.order.customer)[0];
  }

  add() {
    alert("You can't add data in this DEMO");
  }
}
