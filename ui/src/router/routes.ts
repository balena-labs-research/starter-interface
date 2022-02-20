import { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue'), name: 'home' },
      {
        path: 'configuration',
        component: () => import('pages/Configuration.vue'),
        name: 'configuration'
      },
      {
        path: 'filemanager',
        component: () => import('pages/Filemanager.vue'),
        name: 'filemanager'
      },
      {
        path: 'networking',
        component: () => import('pages/Networking.vue'),
        name: 'networking'
      },
      {
        path: 'update',
        component: () => import('pages/Update.vue'),
        name: 'update'
      },
      {
        path: 'documentation',
        component: () => import('pages/Documentation.vue'),
        name: 'documentation'
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
