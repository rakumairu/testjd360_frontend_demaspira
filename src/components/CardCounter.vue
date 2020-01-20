<template>
  <div class="card">
    <div class="card-header">
      {{ type }}
    </div>
    <div class="card-body">
      <h1>{{ amount }}</h1>
    </div>  
  </div>
</template>

<script>
export default {
  name: 'card-counter',
  props: ['type', 'amount']
}
</script>

<style>

</style>