"use strict";
const User = httpVueLoader("../app_vue_router/js/user.vue");
const Sidebar = httpVueLoader("../app_vue_router/js/sidebar.vue");
const UserList = httpVueLoader("../app_vue_router/js/user-list.vue");
const NamedWrapper = httpVueLoader("../app_vue_router/js/named.vue");

/* Router and App setup: */
const routes = [
  {
    path: "/users",
    name: "userList",
    component: UserList
  },
  {
    path: "/named",
    name: "named",
    component: NamedWrapper,
    children: [
      {
        path: "user/:userId",
        name: "named_id",
        components: { user_details: User, sidebar: Sidebar },
        props: { user_details: true, sidebar: false }
      }
    ]
  },
  {
    path: "/user/:userId",
    name: "user",
    component: User,
    props: true
  }
];

const router = new VueRouter({
  routes: routes
});

const app = new Vue({
  router: router
}).$mount("#app");
