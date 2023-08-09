import { createRouter, createWebHistory } from 'vue-router'
import EventListView from '../views/EventListView.vue'
import AboutView from '../views/AboutView.vue'
import NewComponentView from '../views/NewComponentView.vue'
import StudentListView from '@/views/StudentListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'EventList',
      component: EventListView
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
    }
  ]
})

export default router
