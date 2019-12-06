import { getOfficer, listKills, listOfficers } from '../z-common/api'
import { preloadingCachedFetcher } from '../z-common/preloading-cached-fetcher'

export const cachedListOfficers = preloadingCachedFetcher(listOfficers)
export const cachedGetOfficer = preloadingCachedFetcher(getOfficer)
export const cachedListKills = preloadingCachedFetcher(listKills)

export const onRouteChange = targetRoute => ({ route: { name, params } }) => {
  if (name.endsWith(targetRoute)) {
    cachedListOfficers.preload()
    if (params.badgeId) {
      cachedGetOfficer.preload(Number(params.badgeId))
      cachedListKills.preload(Number(params.badgeId))
    }
  }
}
