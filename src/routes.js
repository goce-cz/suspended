import createRouter from 'router5'
import browserPlugin from 'router5-plugin-browser'

import { onRouteChange } from './f-fetch-first/officer-details-cache'
import { OfficerManagement as Single } from './a-single/OfficerManagement'
import { OfficerManagement as Split } from './b-split/OfficerManagement'
import { OfficerManagement as Error } from './c-error/OfficerManagement'
import { OfficerManagement as Waterfall } from './d-waterfall/OfficerManagement'
import { OfficerManagement as WaterfallSuspense } from './e-waterfall-suspense/OfficerManagement'
import { OfficerManagement as FetchFirst } from './f-fetch-first/OfficerManagement'
import { OfficerManagement as Timing } from './g-timing/OfficerManagement'

export const routes = [
  {
    name: 'single',
    path: '/single?:badgeId',
    component: Single
  },
  {
    name: 'split',
    path: '/split?:badgeId',
    component: Split
  },
  {
    name: 'error',
    path: '/error?:badgeId',
    component: Error
  },
  {
    name: 'waterfall',
    path: '/waterfall?:badgeId',
    component: Waterfall
  },
  {
    name: 'waterfall2',
    path: '/waterfall2?:badgeId',
    component: WaterfallSuspense
  },
  {
    name: 'fetch-first',
    path: '/fetch-first?:badgeId',
    component: FetchFirst
  },
  {
    name: 'timing',
    path: '/timing?:badgeId',
    component: Timing
  }
]

export const router = createRouter(routes, { defaultRoute: 'single' })

router.usePlugin(
  browserPlugin()
)

router.subscribe(onRouteChange)

router.start()
