import {
  createRouter,
  createWebHistory,
  RouterScrollBehavior,
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MemberProfile from '../views/MemberProfile.vue'
import ProjectDetails from '../views/ProjectDetails.vue'
import MembersView from '../views/MembersView.vue'
import ProjectsView from '../views/ProjectsView.vue'
import AboutUs from '../views/AboutUs.vue'
import PublicationDetails from '@/views/PublicationDetails.vue'
import PublicationsView from '@/views/PublicationsView.vue'

const routerScrollBehavior: RouterScrollBehavior = async (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition;
  } else {
    return { left: 0, top: 0 };
  }
};


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/members',
      name: 'members',
      component: MembersView
    },
    {
      path: '/member/:id',
      name: 'member',
      component: MemberProfile,
      props: true
    },
    {
      path: '/project/:id',
      name: 'project',
      component: ProjectDetails,
      props: true
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectsView
    },
    {
      path: '/about-us',
      name: 'about-us',
      component: AboutUs
    },
    {
      path: '/publication/:id',
      name: 'publication',
      component: PublicationDetails
    },
    {
      path: '/publications',
      name: 'publications',
      component: PublicationsView
    }
  ],
  scrollBehavior: routerScrollBehavior,
})

export default router
