import { cachedFetcher } from '../common/cached-fetcher'
import { getOfficer, listKills } from '../common/api'

const preloadingCachedFetcher = fetcher => {
  const result = cachedFetcher(fetcher)
  result.preload = id => {
    try {
      result(id)
    } catch (errorOrPromise) {
      if (typeof errorOrPromise.then !== 'function') {
        throw errorOrPromise
      }
    }
  }
  return result
}

export const cachedGetOfficer = preloadingCachedFetcher(getOfficer)
export const cachedListKills = preloadingCachedFetcher(listKills)

export const onRouteChange = ({ route: { name, params } }) => {
  if (name === 'fetch-first' && params.badgeId) {
    cachedGetOfficer.preload(Number(params.badgeId))
    cachedListKills.preload(Number(params.badgeId))
  }
}
