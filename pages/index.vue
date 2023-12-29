<template>
  <div>
    {{ queryString }}
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const queryString = JSON.stringify(route.query);
console.log('QUERY', route.query);
</script>
