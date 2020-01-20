<template>
  <ul class="nav">
    <li class="nav-item">
      <router-link :class="['nav-link', $route.name === 'dashboard' ? 'active' : '']" to="/">Dashboard</router-link>
    </li>
    <li class="nav-item">
      <router-link :class="['nav-link', $route.name === 'add-order' ? 'active' : '']" to="add">Add Order</router-link>
    </li>
    <li class="nav-item admin">
      <span class="nav-link">Hello, Admin</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style>
.nav {
  height: 64px;
  display: flex;
  align-items: center;
  padding: 0 16px;
  margin-bottom: 16px;
  background-color: #20232a;
}

.nav-item > a {
  color: white;
}

.nav-item > a:hover {
  color: #61dafb;
  transition: ease-in-out 0.3s
}

.nav-item > .active {
  color: #61dafb;
}

.admin {
  margin-left: auto;
  color: white;
}
</style>
