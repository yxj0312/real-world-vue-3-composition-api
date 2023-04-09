import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import EventDetailsView from '../views/EventDetailsView.vue'
import EventCreateView from '../views/EventCreateView.vue'
import ErrorDisplay from '../views/ErrorDisplay.vue'
import AboutView from '../views/AboutView.vue'

const router = createRouter({
  // history for spa
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListView,
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props: true,
      component: EventDetailsView,
    },
    {
      path: '/event/create',
      name: 'EventCreate',
      component: EventCreateView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/error/:error',
      name: 'ErrorDisplay',
      props: true,
      component: ErrorDisplay,
    },
  ],
})

export default router
