import { createRouter, createWebHistory } from 'vue-router';
import ConFormation from './components/ConFormation.vue'
import LogiN from './components/LogiN.vue'
import HelloWorld from './components/HelloWorld.vue'
import DashBoard from './components/DashBoard.vue'
import LogOut from './components/LogOut.vue'
import PermissionPage from './components/PermissionPage.vue'
import DetailS from './components/DetailS.vue'
const routes=[{
    path  : '/conformation',
    component : ConFormation},
    {
        path : '/login',
        component : LogiN
    },
    {
        path : '/register',
        component : HelloWorld
    },
    {
        path : '/dashBoard',
        component : DashBoard
    },
    {
        path: '/logout',
        component: LogOut,
        props: (route) => ({
          onLogout: route.params.onLogout,
        }),
      },
      {
        path : '/permission-page',
        component : PermissionPage,
      },
      {
        path : '/userDetail/:userId',
        component : DetailS
      },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
  });

  
  
  export default router;