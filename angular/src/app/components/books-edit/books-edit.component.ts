import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.scss']
})
export class BooksEditComponent implements OnInit {
  private id: number;
  book: any;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => this.id = params['id'] || '/');
    this.book = this.dataService.getBookById(this.id)[0];
  }

  save() {
    alert("You can't edit data in this DEMO");
  }

}
