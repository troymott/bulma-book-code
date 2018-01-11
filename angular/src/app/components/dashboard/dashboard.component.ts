import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public orders: any;
  public books: any;
  public customers: any;
  public statistics: any;

  public filter: string = "This Month";

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.orders = this.dataService.getOrdersDashboard();
    this.books = this.dataService.getBooksDashboard();
    this.customers = this.dataService.getCustomersDashboard();
    this.statistics = this.dataService.getStatistics(this.filter);
  }

  onChange(event) {
    this.statistics = this.dataService.getStatistics(this.filter);
  }

}
