import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import NewComponentView from '../views/NewComponentView.vue'
import StudentListView from '@/views/StudentListView.vue'
import EventDetailView from '../views/event/EventDetailView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventListView,
      props: (route) => ({page: parseInt(route.query?.page as string || '1'), limit: parseInt(route.query?.limit as string || '2')  })
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/component',
      name: 'Component',
      component: NewComponentView
    },
    {
      path: '/student',
      name: 'Student',
      component: StudentListView
    },
    {
      path: '/event/:id',
      name: 'event-detail',
      component: EventDetailView,
      props: true
    }
  ]
})

export default router
