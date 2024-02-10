<template>
    <v-virtual-scroll :items="[1,2,3]">
        <template #default="{ item }">
            {{ item }}
        </template>
    </v-virtual-scroll>
  </template>