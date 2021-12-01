<script setup lang="ts">
import {
  VCard,
  VIcon,
  VList,
  VListItem,
  VListItemTitle,
  VMenu,
} from 'vuetify/components';
import { ref } from 'vue';
import { translator } from '../utils';

const multilang = ref([{ title: '简体中文' }]);
</script>

<template>
  <div class="header">
    <div class="config">
      <v-menu offset-y>
        <template v-slot:activator="{ props }">
          <v-icon color="grey" v-bind="props">mdi-translate</v-icon>
        </template>
        <v-card>
          <v-list dense>
            <v-list-item
              link
              v-for="(item, index) in multilang"
              :key="item.title + index"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </div>
  </div>
</template>

<style scoped></style>
