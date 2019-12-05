import { cachedFetcher } from './cached-fetcher'

export const preloadingCachedFetcher = fetcher => {
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
