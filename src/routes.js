import createRouter from 'router5'
import browserPlugin from 'router5-plugin-browser'

import { clearCache } from './z-common/cached-fetcher'
import { onRouteChange as onRouteChangeFetchFirst } from './f-fetch-first/officer-details-cache'
import { onRouteChange as onRouteChangeTiming } from './g-timing/officer-details-cache'
import { OfficerManagement as Effects } from './0-effects/OfficerManagement'
import { OfficerManagement as Single } from './a-single/OfficerManagement'
import { OfficerManagement as Split } from './b-split/OfficerManagement'
import { OfficerManagement as Error } from './c-error/OfficerManagement'
import { OfficerManagement as Waterfall } from './d-waterfall/OfficerManagement'
import { OfficerManagement as WaterfallSuspense } from './e-waterfall-suspense/OfficerManagement'
import { OfficerManagement as FetchFirst } from './f-fetch-first/OfficerManagement'
import { OfficerManagement as Timing } from './g-timing/OfficerManagement'
import { OfficerManagement as Resource } from './h-resource/OfficerManagement'
import { OfficerManagement as Transition } from './i-transition/OfficerManagement'

export const ROOT = 'root'

export const routes = [
  {
    name: 'effects',
    path: '/effects?:badgeId',
    component: Effects
  },
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
  },
  {
    name: 'resource',
    path: '/resource?:badgeId',
    component: Resource
  },
  {
    name: 'transition',
    path: '/transition?:badgeId',
    component: Transition
  }
]

export const router = createRouter(
  [
    {
      name: ROOT,
      path: '/:mode',
      children: routes
    }
  ],
  {
    defaultRoute: `${ROOT}.effects`,
    defaultParams: {
      mode: 'blocking'
    }
  }
)

router.usePlugin(
  browserPlugin()
)

router.subscribe(({route,previousRoute}) => {
  if(route.name !== (previousRoute && previousRoute.name)) {
    clearCache()
  }
})
router.subscribe(onRouteChangeFetchFirst)
router.subscribe(onRouteChangeTiming('timing'))
router.subscribe(onRouteChangeTiming('transition'))

router.start()
