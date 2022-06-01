import {
	createRouter,
	createWebHashHistory
} from 'vue-router'
import age from '../views/About/induction/age.vue'
import education from '../views/About/induction/education.vue'
import location from '../views/About/induction/location.vue'
import work from '../views/About/induction/work.vue'
import future from '../views/Future/future/future.vue'
import now from '../views/Future/future/now.vue'
import road from '../views/Future/future/road.vue'
import collage from '../views/Project/life/collage.vue'
import mylife from '../views/Project/life/mylife.vue'
import small from '../views/Project/life/small.vue'
import travel from '../views/Project/life/travel.vue'
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
		redirect: '/age',
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
		path: '/future',
		name: 'Future',
		component: () => import( /* webpackChunkName: "about" */ '../views/Future/index.vue'),
		redirect: '/now',
		children: [{
				path: '/futures',
				name: 'Futures',
				components: {
					default: {
						road: road,
						now: now
					},
					future: future,
				},
			}, {
				path: '/now',
				name: 'Now',
				components: {
					default: {
						road: road,
						future: future,
					},
					now: now
				},
			}, {
				path: '/road',
				name: 'Road',
				components: {
					default: {
						now: now,
						future: future,
					},
					road: road,
				},
			}

		]
	},
	{
		path: '/live',
		name: 'Live',
		component: () => import( /* webpackChunkName: "about" */ '../views/Live/index.vue')
	}, {
		path: '/project',
		name: 'Project',
		component: () => import( /* webpackChunkName: "about" */ '../views/Project/index.vue'),
		redirect: '/collage',
		children: [{
				path: '/collage',
				name: 'collage',
				components: {
					default: {
						mylife: mylife,
						small: small,
						travel: travel
					},
					collage: collage,
				}
			}, {
				path: '/mylife',
				name: 'mylife',
				components: {
					default: {
						small: small,
						travel: travel,
						collage: collage,
					},
					mylife: mylife,
				}
			},
			{
				path: '/small',
				name: 'small',
				components: {
					default: {
						travel: travel,
						collage: collage,
						mylife: mylife,
					},
					small: small,
				}
			},
			{
				path: '/travel',
				name: 'travel',
				components: {
					default: {
						small: small,
						mylife: mylife,
						collage: collage,
					},
					travel: travel,
				}
			}
		]
	},
	{
		path: '/blogs',
		name: 'blogs',
		component: () => import( /* webpackChunkName: "about" */ '../views/Blogs/index.vue')
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
