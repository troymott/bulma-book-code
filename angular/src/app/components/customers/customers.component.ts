import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  public customers: any;
  public order: string = 'name';
  public userFilter: any = { name: '' };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.customers = this.dataService.getCustomers();
  }

  add() {
    alert("You can't add data in this DEMO");
  }

  delete() {
    alert("You can't delete data in this DEMO");
  }

}
