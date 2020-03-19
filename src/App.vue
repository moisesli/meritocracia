<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/login">Login</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    <!-- Container -->
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>
