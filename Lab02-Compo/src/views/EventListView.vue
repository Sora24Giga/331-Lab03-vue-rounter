<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import NewComponent from '@/components/NewComponent.vue'
import type { EventItem } from '@/type'
import { ref, type Ref } from 'vue'
import EventService from '@/services/EventService'

const events: Ref<Array<EventItem>> = ref([])
EventService.getEvent().then((response) =>{
  events.value = response.data
})

</script>

<template>
  <h1>Events For Greater Good</h1>
  <main class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
    <NewComponent v-for="event in events" :key="event.id" :event="event"></NewComponent>
  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
