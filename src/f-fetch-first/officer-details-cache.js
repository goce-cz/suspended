import { getOfficer, listKills } from '../common/api'
import { preloadingCachedFetcher } from '../common/preloading-cached-fetcher'

export const cachedGetOfficer = preloadingCachedFetcher(getOfficer)
export const cachedListKills = preloadingCachedFetcher(listKills)

export const onRouteChange = ({ route: { name, params } }) => {
  if (name.endsWith('fetch-first') && params.badgeId) {
    cachedGetOfficer.preload(Number(params.badgeId))
    cachedListKills.preload(Number(params.badgeId))
  }
}
