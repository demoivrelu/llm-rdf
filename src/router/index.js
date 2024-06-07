import Vue from 'vue';
import Router from 'vue-router';
import main from '@/pages/main/main.vue';
import My from '@/components/My.vue';
import login from '@/pages/login/login.vue';
import ThirdPartAI from '@/pages/3rdPartAI/3rdPartAI.vue';
import ai from '@/pages/ai/ai.vue';

Vue.use(Router);
const routes = [
    { path: '/login', component: login },
    { path: '/my', component: My },
    { path: '/main', component: () => import('../pages/main/main.vue') },
    { path: '/3rdPartAI', name: '3rdPartAI', component: ThirdPartAI, },
    // { path: '/ai', name: 'ai', component: ai, },
    { path: '/screener', name: 'screener', component: () => import('../pages/screener/screener.vue') },
    {
      path: '/graph-canvas',
      name: 'graph-canvas',
      component: () => import('../pages/graph/graphCanvas.vue'),
    },
  ]
  
export default new Router({ routes })
