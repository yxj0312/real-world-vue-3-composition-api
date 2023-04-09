<script setup>
import { onMounted } from 'vue'
import { useEventStore } from '../stores/EventStore'
import { computed } from 'vue'

const props = defineProps({
  id: {
    required: true,
  },
})
const eventStore = useEventStore()
const event = computed(() => eventStore.event)

onMounted(() => {
  eventStore.fetchEvent(props.id).catch((error) => {
    console.log(error)
  })
})
</script>
<template>
  <div v-if="event">
    <h1>{{ event.title }}</h1>
    <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
    <p>{{ event.description }}</p>
  </div>
</template>
