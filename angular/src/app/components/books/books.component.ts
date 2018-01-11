import { Component, OnInit } from '@angular/core';
import { DataService } from "../../services/data.service";

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {
  public books: any;
  public order: string = 'title';
  public userFilter: any = { title: '' };

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.books = this.dataService.getBooks();
  }

  add() {
    alert("You can't add data in this DEMO");
  }

}
