import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Dashboard from '../views/Dashboard.vue'
import Profile from '../views/Profile.vue'
import Settings from '../views/Settings.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/dashboard',
    component: Dashboard,
    children: [
      {
        path: 'profile',
        component: Profile
      },
      {
        path: 'settings',
        component: Settings
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router


import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App)
  .use(router)
  .mount('#app')

<template>
  <h1>Vue Router Example</h1>

  <router-link to="/">Home</router-link> |
  <router-link to="/dashboard">Dashboard</router-link> |
  <router-link to="/dashboard/profile">Profile</router-link> |
  <router-link to="/dashboard/settings">Settings</router-link>

  <router-view />
</template>






import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    count: 0
  }),

  getters: {
    doubleCount: (state) => state.count * 2
  },

  actions: {
    increment() {
      this.count++
    },

    decrement() {
      this.count--
    },

    reset() {
      this.count = 0
    }
  }
})


import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)

app.use(createPinia())
app.mount('#app')

<script setup>
import { useCounterStore } from './stores/counter'

const counter = useCounterStore()
</script>

<template>
  <h1>Pinia Counter</h1>

  <h2>Count: {{ counter.count }}</h2>
  <h2>Double: {{ counter.doubleCount }}</h2>

  <button @click="counter.increment()">Increment</button>
  <button @click="counter.decrement()">Decrement</button>
  <button @click="counter.reset()">Reset</button>
</template>


