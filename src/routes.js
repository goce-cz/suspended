import createRouter from 'router5'
import browserPlugin from 'router5-plugin-browser'

export const BASIC = 'default'

export const router = createRouter(
  [{ name: BASIC, path: '/basic?:badgeId' }],
  { defaultRoute: BASIC }
)

router.usePlugin(
  browserPlugin()
)

router.start()
