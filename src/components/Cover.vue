<script setup lang="ts">
import { translator } from '../utils';

defineProps<{
  title: string;
  subTitle?: string;
  coverImg: string;
}>();
</script>

<template>
  <h1>{{ translator(title) }}</h1>
</template>

<style scoped lang="scss"></style>
