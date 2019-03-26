<template>
  <div>
    <h3>Passing users into named views:</h3>
    <p>So what happens here is that you have two 'real' hyperlinks which both will pass 
      a user to the router. The route that is followed will be prefixed by '/named' and 
      will have 'user/:userId' appeded to it. In this fashion you have a parent route, and 
      child routes all combined into one unit. The display still makes use of the user component.
    </p>
    <ul>
      <li>
        <router-link :to="{ name: 'named_id', params: { userId: 852 } }">User 852</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'named_id', params: { userId: 987, userData: { age: 28, name: 'Danny Enzio'} } }">User 987</router-link>
      </li>
      </ul>
      <div class="userList">
        <router-view class="float-left" name="user_details"></router-view>
        <router-view class="float-right" name="sidebar"></router-view>
      </div>
    </div>
  </template>

  <script>
  module.exports = {
    name: "named",
    methods: {}
  }
  </script>

  <style>
  .hello {
    background-color: #ffe;
  }
  </style>

