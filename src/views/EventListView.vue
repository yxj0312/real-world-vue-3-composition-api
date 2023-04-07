<script setup>
import EventCard from '@/components/EventCard.vue'
import { onMounted } from 'vue'
import { useEventStore } from '../stores/EventStore'

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
    <EventCard
      v-for="event in eventStore.events"
      :key="event.id"
      :event="event"
    />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
