const caches = []

export const clearCache = () => {
  caches.forEach(map => map.clear())
}

export const cachedFetcher = (fetcher) => {
  const cache = new Map()
  caches.push(cache)
  return id => {
    let entry = cache.get(id)
    if (!entry) {
      entry = {
        promise: fetcher(id)
      }
      entry.promise.then(
        data => {
          entry.promise = null
          entry.data = data
        },
        error => {
          entry.promise = null
          entry.rejected = true
          entry.error = error
        }
      )
      cache.set(id, entry)
    }
    if (entry.promise) {
      throw entry.promise
    } else if (entry.rejected) {
      throw entry.error
    } else {
      return entry.data
    }
  }
}
