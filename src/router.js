import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/views/LoginPage.vue'
import GoodMainPage from '@/views/GoodMainPage.vue'
import SubjectPage from './views/SubjectPage.vue'
import StudenList from './views/StudenList.vue'
import SubirMaterial from './views/SubirMaterial.vue'

const routes = [
    {
        path: '/',
        name: 'Login',
        component: LoginPage
    },
    {
        path: '/main',
        name: 'MainPage',
        component: GoodMainPage
    },
    {
        path: '/subject',
        name: 'SubjectPage',
        component: SubjectPage
    },
    {
        path: '/students',
        name: 'StudenList',
        component: StudenList
    },
    {
        path: '/material',
        name: 'SubirMaterial',
        component: SubirMaterial
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router