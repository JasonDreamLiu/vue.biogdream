import Vue from 'vue';
import VueRouter from 'vue-router';

const BlogIndex = () => import(/* webpackChunkName: "blogIndex" */ '@/views/blog/Index');
const Home = () => import(/* webpackChunkName: "home" */ '@/views/Home');
const About = () => import(/* webpackChunkName: "about" */ '@/views/About.vue');
const My = () => import(/* webpackChunkName: "my" */ '@/views/blog/My/Index.vue');
const Notes = () => import(/* webpackChunkName: "notes" */ '@/views/blog/Notes/Index.vue');
const Article = () => import(/* webpackChunkName: "article" */ '@/views/blog/Article/Index.vue');
const Icemoo = () => import(/* webpackChunkName: "icemoo" */ '@/views/blog/Icemoo/Index.vue');
const AllSel = () => import(/* webpackChunkName: "allSel" */ '@/components/AllSel/Index.vue');

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        component: BlogIndex,
        children: [
            {
                path: '',
                name: 'Home',
                component: Home
            },
            {
                path: 'home',
                redirect: {name: 'Home'}
            },
            {
                path: 'my',
                name: 'My',
                component: My
            },
            {
                path: 'notes',
                name: 'Notes',
                component: Notes
            },
            {
                path: 'article',
                name: 'Article',
                component: Article
            },
            {
                path: 'icemoo',
                name: 'Icemoo',
                component: Icemoo
            },
            {
                path: 'allsel',
                name: 'AllSel',
                component: AllSel
            },
        ]
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: About
    },
]

const router = new VueRouter({
    routes
})

export default router
