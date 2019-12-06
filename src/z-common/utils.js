import { useCallback } from 'react'
import { useRoute } from 'react-router5'

export const delay = timeout => new Promise(resolve => setTimeout(resolve, timeout))

export const useBadgeId = () => {
  const { route, router } = useRoute()
  const { badgeId } = route.params

  const handleChange = useCallback(
    newBadgeId => {
      const currentRoute = router.getState()
      router.navigate(currentRoute.name, { ...currentRoute.params, badgeId: newBadgeId })
    },
    [router]
  )

  return [badgeId && Number(badgeId), handleChange]
}
