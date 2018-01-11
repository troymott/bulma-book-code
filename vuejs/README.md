# vue-bulma-dahsboard

> A dashboard example using Bulma CSS framework and VueJS.

## Build template Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

## Project setup
1. 
``` bash
# install vue-router
npm install vue-router
```

2. Add folder named **router** to the root folder.
3. Create a file named **index.js** inside this new router-folder.
4. Add the following code inside this file
	```vuejs
	import Vue from "vue";
    import Router from "vue-router";
    import Dashboard from "../pages/Dashboard.vue";
    
    Vue.use(Router);
    
    export default new Router({
      routes: [
        {
          path: "/",
          name: "Dashboard",
          component: Dashboard,
        },
      ],
    });
	```
5. Lastly, inside your main.js file. Import the new router file/folder inside and change the `new vue()` statement to read:
	   ```vuejs
	new Vue({
      el: "#app",
      router,
      render: h => h(App),
    });
	```

For detailed explanation on how things work, consult the following docs.
* [docs for vue CLI](https://github.com/vuejs/vue-cli).
* [docs for vue-loader](https://vuejs.github.io/vue-loader).
* [docs for vue-router](https://router.vuejs.org).
