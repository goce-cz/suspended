export const cachedFetcher = (fetcher) => {
  const cache = new Map()
  return id => {
    let entry = cache.get(id)
    if (!entry) {
      entry = {
        promise: fetcher(id)
      }
      entry.promise.then(data => {
        entry.promise = null
        entry.data = data
      })
      cache.set(id, entry)
    }

    if (entry.promise) {
      throw entry.promise
    } else {
      return entry.data
    }
  }
}
