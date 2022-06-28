<script lang="ts" setup>
import {ref} from 'vue';
import {readFile} from '#preload';

const count = ref(0);
</script>

<template>
  <button
    class="add"
    @click="count++"
  >
    count is: {{ count }}
  </button>
  <br><br>
  <button
    class="read"
    @click="readFile"
  >
    readFile
  </button>
  <code>packages/renderer/src/components/ReactiveCounter.vue</code>
</template>
