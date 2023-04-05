<script setup>
import EventCard from '@/components/EventCard.vue'
import EventService from '@/services/EventService.js'
import { ref, onMounted } from 'vue'
import { useEventStore } from '../stores/EventStore'

const events = ref(null)
const eventStore = useEventStore()

onMounted(() => {
  eventStore.fetchEvents().catch((error) => {
    this.$router.push({
      name: 'ErrorDisplay',
      params: { error: error },
    })
  })
})
</script>

<template>
  <h1>{{ eventStore.numberOfEvents }} Events For Good</h1>
  <div class="events">
    <EventCard v-for="event in events" :key="event.id" :event="event" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
