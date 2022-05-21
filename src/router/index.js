import {
	createRouter,
	createWebHashHistory
} from 'vue-router'
import age from '../views/About/induction/age.vue'
import education from '../views/About/induction/education.vue'
import location from '../views/About/induction/location.vue'
import work from '../views/About/induction/work.vue'
const routes = [{
		path: '/',
		name: 'Home',
		component: () => import( /* webpackChunkName: "about" */ '../views/Home/index.vue')
	},
	{
		path: '/blog',
		name: 'Blog',
		component: () => import( /* webpackChunkName: "about" */ '../views/Blog/blog.vue')
	},
	{
		path: '/about',
		name: 'About',
		component: () => import( /* */ '../views/About/about.vue'),
		children: [{
				path: '/age',
				name: 'Age',
				components: {

					default: {
						b: education,
						c: location,
						d: work
					},
					a: age,
				},
			}, {
				path: '/education',
				name: 'Education',
				components: {
					b: education,
					default: {
						a: age,
						c: location,
						d: work
					}
				},
			},
			{
				path: '/location',
				name: 'Location',
				components: {
					c: location,
					default: {
						a: age,
						b: education,
						d: work
					}
				},
			},
			{
				path: '/work',
				name: 'Work',
				components: {
					d: work,
					default: {
						c: location,
						a: age,
						b: education,
					}
				},
			}
		]
	},
	{
		path:'/future',
		name:'Future',
		component: () => import( /* webpackChunkName: "about" */ '../views/Future/index.vue')
	},
	{
		path:'/live',
		name:'Live',
		component: () => import( /* webpackChunkName: "about" */ '../views/Live/index.vue')
	},
	{
		path:'/project',
		name:'Project',
		component: () => import( /* webpackChunkName: "about" */ '../views/Project/index.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
