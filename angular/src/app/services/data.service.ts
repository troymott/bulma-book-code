import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  constructor() {
    localStorage.clear();
    localStorage.setItem("statistics", JSON.stringify([
      { id: 1, when: "Today", orders: 34, revenue: "7,648", visitors: "1,678", pageviews: "20,756" },
      { id: 2, when: "Yesterday", orders: 5, revenue: "4,555", visitors: "2,678", pageviews: "9,756" },
      { id: 3, when: "This Week", orders: 232, revenue: "13,400", visitors: "3,678", pageviews: "28,756" },
      { id: 4, when: "This Month", orders: 300, revenue: "40,648", visitors: "4,678", pageviews: "120,756" },
      { id: 5, when: "This Year", orders: 576, revenue: "20,648", visitors: "5,678", pageviews: "220,756" },
      { id: 6, when: "All time", orders: 800, revenue: "77,678", visitors: "6,678", pageviews: "230,756" }
    ]));

    localStorage.setItem("books", JSON.stringify([
      { id: 1, "image": "tensorflow.jpg", "title": "TensorFlow For Machine Intelligence", "price": 22.99, "pages": 270, "ISBN": "9781939902351" },
      { id: 2, "image": "docker.jpg", "title": "Docker in Production", "price": 22.99, "pages": 156, "ISBN": "9781939902184" },
      { id: 3, "image": "gulp.jpg", "title": "Developing a Gulp.js Edge", "price": 22.99, "pages": 134, "ISBN": "9781939902146" },
      { id: 4, "image": "swift.jpg", "title": "Learning Swift", "price": 22.99, "pages": 342, "ISBN": "9781939902115 " },
      { id: 5, "image": "js-framework.jpg", "title": "Choosing a JavaScript Framework", "price": 19.99, "pages": 96, "ISBN": "9781939902092" },
      { id: 6, "image": "google-cardboard.jpg", "title": "Deconstructing Google Cardboard Apps", "price": 22.99, "pages": 178, "ISBN": "9781939902245" }
    ]));

    localStorage.setItem("customers", JSON.stringify([
      { id: 1, name: "John Miller", email: "johnmiller@gmail.com", country: "United States", orders: 7, hasOrders: true },
      { id: 2, name: "Samantha Rogers", email: "samrogers@gmail.com", country: "United Kingdom", orders: 5, hasOrders: true },
      { id: 3, name: "Paul Jacques", email: "paul.jacques@gmail.com", country: "Canada", orders: 2, hasOrders: true }
    ]));

    localStorage.setItem("orders", JSON.stringify([
      { id: 1, number: 787352, customer: "John Miller", date: "Nov 18, 17:38", books: 2, status: "In progress", total: 56.98 },
      { id: 2, number: 289050, customer: "John Miller", date: "Nov 16, 11:45", books: 1, status: "Successful", total: 21.99 }
    ]));
  }

  getBooks(): any {
    return JSON.parse(localStorage.getItem("books"));
  }

  getBookById(id: number): any {
    return JSON.parse(localStorage.getItem("books")).filter(function (book) {
      return book.id == id;
    });
  }

  getBooksDashboard(): any {
    return JSON.parse(localStorage.getItem("books")).filter(function (book) {
      return book.id % 2;
    });
  }

  getCustomers(): any {
    return JSON.parse(localStorage.getItem("customers"));
  }

  getCustomerById(id: number): any {
    return JSON.parse(localStorage.getItem("customers")).filter(function (customer) {
      return customer.id == id;
    });
  }

  getCustomersDashboard(): any {
    return JSON.parse(localStorage.getItem("customers")).filter(function (customer) {
      return customer.id % 2;
    });
  }

  getCustomerByName(name: string): any {
    return JSON.parse(localStorage.getItem("customers")).filter(function (customer) {
      return customer.name == name;
    });
  }

  getOrders(): any {
    return JSON.parse(localStorage.getItem("orders"));
  }

  getOrderById(id: number): any {
    return JSON.parse(localStorage.getItem("orders")).filter(function (orders) {
      return orders.id == id;
    });
  }

  getOrdersDashboard(): any {
    return JSON.parse(localStorage.getItem("orders")).filter(function (order) {
      return order.id % 2;
    });
  }

  getStatistics(when: string): any {
    return JSON.parse(localStorage.getItem("statistics")).filter(function (data) {
      return data.when == when;
    });
  }
}
