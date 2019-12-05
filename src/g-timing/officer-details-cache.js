import { getOfficer, listKills, listOfficers } from '../common/api'
import { preloadingCachedFetcher } from '../common/preloading-cached-fetcher'

export const cachedListOfficers = preloadingCachedFetcher(listOfficers)
export const cachedGetOfficer = preloadingCachedFetcher(getOfficer)
export const cachedListKills = preloadingCachedFetcher(listKills)

export const onRouteChange = ({ route: { name, params } }) => {
  if (name === 'timing') {
    cachedListOfficers.preload()
    if (params.badgeId) {
      cachedGetOfficer.preload(Number(params.badgeId))
      cachedListKills.preload(Number(params.badgeId))
    }
  }
}
