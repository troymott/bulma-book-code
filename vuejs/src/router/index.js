import Vue from "vue";
import Router from "vue-router";
import Dashboard from "../pages/Dashboard.vue";
import Login from "../pages/Login.vue";
import Books from "../pages/Books.vue";
import BookNew from "../pages/BookNew.vue";
import BookEdit from "../pages/BookEdit.vue";
import Orders from "../pages/Orders.vue";
import OrderEdit from "../pages/OrderEdit.vue";
import Customers from "../pages/Customers.vue";
import CustomerNew from "../pages/CustomerNew.vue";
import CustomerEdit from "../pages/CustomerEdit.vue";

Vue.use(Router);

export default new Router({
  routes: [{
      path: "/",
      redirect: '/login'
    },
    {
      path: "/logout",
      redirect: '/login'
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/books",
      name: "Books",
      component: Books,
    },
    {
      path: "/new-book",
      name: "BookNew",
      component: BookNew,
    },
    {
      path: "/edit-book",
      name: "BookEdit",
      component: BookEdit,
    }, {
      path: "/orders",
      name: "Orders",
      component: Orders,
    },
    {
      path: "/edit-order",
      name: "OrderEdit",
      component: OrderEdit,
    },
    {
      path: "/customers",
      name: "Customers",
      component: Customers,
    },
    {
      path: "/new-customer",
      name: "CustomerNew",
      component: CustomerNew,
    },
    {
      path: "/edit-customer",
      name: "CustomerEdit",
      component: CustomerEdit,
    },
  ],
  linkActiveClass: 'is-active' /* change to Bulmas active nav link */
});
