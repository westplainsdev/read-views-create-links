<template>
      <div>
      <h4>User ID: ({{userId}})</h4>
      <div v-if="userData">
        <p>This route makes use of some option data that was passed in:</p>
        <p>{{userData.name}} ({{userData.age}} yrs old)</p>
      </div>
    </div>
</template>

<script>
module.exports = {
  name: "user",
  props: ['userId', 'userData'],
  methods: {}
}
</script>

<style>
.hello {
    background-color: #ffe;
}
</style>

