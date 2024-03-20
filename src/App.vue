<script setup>
  import Spinner from './components/Spinner/Spinner.vue';
  import { Toaster } from '@/components/ui/toast'
  import { RouterView } from 'vue-router'
  import Nav from '@/components/Nav/Nav.vue'
  import { useElectionStore } from './stores/adminStore';
  import { onBeforeMount } from 'vue'

  const store = useElectionStore()

  onBeforeMount(() => {
    store.fetchElection()
  })
</script>

<template>

  <Nav v-if="$router.currentRoute.value.meta.admin" />

  <RouterView />

  <div v-if="store.isLoading">
    <Spinner />
  </div>
  
  <Toaster />
</template>
