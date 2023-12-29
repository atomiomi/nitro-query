<template>
  <div>
    {{ queryString }}
  </div>
</template>

<script lang="ts" setup>
const route = useRoute();
const queryString = JSON.stringify(route.query);
</script>
