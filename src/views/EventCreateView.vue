<script setup>
import { v4 as uuidv4 } from 'uuid'
import { useEventStore } from '../stores/EventStore'
import { useUserStore } from '../stores/UserStore'
import { useRouter } from 'vue-router'

const eventStore = useEventStore()
const userStore = useUserStore()
const router = useRouter()
const categories = [
  'sustainability',
  'nature',
  'animal welfare',
  'housing',
  'education',
  'food',
  'community',
]
let event = {
  id: '',
  category: '',
  title: '',
  description: '',
  location: '',
  date: '',
  time: '',
  organizer: '',
}
const onSubmit = () => {
  event = {
    ...event,
    id: uuidv4(),
    organizer: userStore.user,
  }
  eventStore
    .createEvent(event)
    .then(() => {
      router.push({
        name: 'event-details',
        params: { id: event.id },
      })
    })
    .catch((error) => {
      router.push({
        name: 'ErrorDisplay',
        params: { error: error },
      })
    })
}
</script>

<template>
  <h1>Create an event</h1>

  <div class="form-container">
    <form @submit.prevent="onSubmit">
      <label>Select a category: </label>
      <select v-model="event.category">
        <option
          v-for="option in categories"
          :value="option"
          :key="option"
          :selected="option === event.category"
        >
          {{ option }}
        </option>
      </select>

      <h3>Name & describe your event</h3>

      <label>Title</label>
      <input v-model="event.title" type="text" placeholder="Title" />

      <label>Description</label>
      <input
        v-model="event.description"
        type="text"
        placeholder="Description"
      />

      <h3>Where is your event?</h3>

      <label>Location</label>
      <input v-model="event.location" type="text" placeholder="Location" />

      <h3>When is your event?</h3>
      <label>Date</label>
      <input v-model="event.date" type="text" placeholder="Date" />

      <label>Time</label>
      <input v-model="event.time" type="text" placeholder="Time" />

      <button type="submit">Submit</button>
    </form>
  </div>
</template>
