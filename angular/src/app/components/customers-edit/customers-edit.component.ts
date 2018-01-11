import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-customers-edit',
  templateUrl: './customers-edit.component.html',
  styleUrls: ['./customers-edit.component.scss']
})
export class CustomersEditComponent implements OnInit {
  private id: number;
  customer: any;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => this.id = params['id'] || '/');
    this.customer = this.dataService.getCustomerById(this.id)[0];
  }

  save() {
    alert("You can't edit data in this DEMO");
  }

}
