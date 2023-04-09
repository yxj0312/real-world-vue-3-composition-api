<script setup>
import EventCard from '@/components/EventCard.vue'
import { onMounted } from 'vue'
import { useEventStore } from '../stores/EventStore'
import { computed } from 'vue'
import { useRouter } from 'vue-router'

const eventStore = useEventStore()
const events = computed(() => eventStore.events)
const router = useRouter()

onMounted(() => {
  eventStore.fetchEvents().catch((error) => {
    router.push({
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
