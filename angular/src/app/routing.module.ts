import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { BooksComponent } from './components/books/books.component';
import { CustomersComponent } from './components/customers/customers.component';
import { OrdersComponent } from './components/orders/orders.component';
import { BooksEditComponent } from './components/books-edit/books-edit.component';
import { CustomersEditComponent } from './components/customers-edit/customers-edit.component';
import { OrdersEditComponent } from './components/orders-edit/orders-edit.component';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard', component: DashboardComponent,
    data: { title: 'Dashboard' }
  },
  {
    path: 'books', component: BooksComponent,
    data: { title: 'Books' }
  },
  {
    path: 'books-edit', component: BooksEditComponent,
    data: { title: 'Books Edit' }
  },
  {
    path: 'customers', component: CustomersComponent,
    data: { title: 'Customers' }
  },
  {
    path: 'customers-edit', component: CustomersEditComponent,
    data: { title: 'Customers Edit' }
  },
  {
    path: 'orders', component: OrdersComponent,
    data: { title: 'Orders' }
  }
  ,
  {
    path: 'orders-edit', component: OrdersEditComponent,
    data: { title: 'Orders Edit' }
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: [

  ]
})
export class RoutingModule { }

export const RoutingComponents = [
  DashboardComponent,
  BooksComponent,
  BooksEditComponent,
  CustomersComponent,
  CustomersEditComponent,
  OrdersComponent,
  OrdersEditComponent
];
