<template>
<div class="userList">
      <div class="left">
        <h3>Passing id's to click handlers:</h3>
       <p> <code>Selected user Id: {{selectedUser}} </code></p>
        <p>What is happening here is that you have two click events both passing an 'id' as 
          a parameter. Code within this component determines which user to display. There is 
          no navigtion happening, but the display is still using the 'user component'.
        <ul>
          <li><span class="userLink" @click="loadUserData(852)">User 852</span></li>
          <li><span class="userLink" @click="loadUserData(987)">User 987</span></li>
        </ul>
      </div>
      <div class="right" v-if="selectedUser.userId">
        <user :user-id="selectedUser.userId" :user-data="selectedUser.userData"></user>
      </div>
    </div>
</template>

<script>
const User = httpVueLoader('./user.vue')
module.exports = {
  data: function data() {
    return {
      selectedUser: {} // selected user data. Place this here to make sure it's reactive.
    };
  },
  methods: {
    loadUserData: function loadUserData(id) {
      this.selectedUser = id === 852 ? { userId: 852 } : { userId: 987, userData: { age: 28, name: 'Danny Enzio' } };
    }
  },

    components: {
      user: User
    }
  }
  </script>

  <style>
  .hello {
    background-color: #ffe;
  }
  </style>

