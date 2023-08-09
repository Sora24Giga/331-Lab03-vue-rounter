<script setup lang="ts">
import EventCard from '../components/EventCard.vue'
import NewComponent from '@/components/NewComponent.vue'
import type { EventItem } from '@/type'
import { ref, type Ref, watchEffect, computed  } from 'vue'
import EventService from '@/services/EventService'
import type { AxiosResponse } from 'axios'


const events: Ref<Array<EventItem>> = ref([])
const totalEvent = ref<number>(0)
const props = defineProps({
  page: {
    type: Number,
    required: true
  } ,
  limit: {
    type: Number,
    required: true
  }
})

watchEffect(()=>{
  EventService.getEvent(props.limit, props.page).then((response: AxiosResponse<EventItem[]>) => {
    events.value = response.data
    totalEvent.value = response.headers['x-total-count']
  })
})

const hasNextPage = computed(() => {
  const totalPages = Math.ceil(totalEvent.value / props.limit)
  return props.page.valueOf() < totalPages
})
</script>

<template>
  <h1>Events For Greater Good</h1>
  <main class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event"></EventCard>
    <NewComponent v-for="event in events" :key="event.id" :event="event"></NewComponent>

  <div class="pagination">
    <RouterLink :to="{ name: 'EventList', query: {page: page -1}}" rel="prev" v-if="page!= 1" id="page-prev">
      Prev Page
    </RouterLink>

    <RouterLink :to="{name:'EventList', query:{page: page + 1} }" rel="next" v-if="hasNextPage" id="page-next">
    Next Page
    </RouterLink>
  </div>

  </main>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.pagination a {
  flex: 1;
  text-decoration: none;
  color: #2c3e50;
}

#page-prev{
  text-align: left;
}

#page-next {
  text-align: right;
}
</style>
