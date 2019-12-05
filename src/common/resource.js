export const createResource = promise => {
  let state = 'pending'
  let data = null
  let error = null
  promise.then(
    newData => {
      state = 'resolved'
      data = newData
    },
    newError => {
      state = 'rejected'
      error = newError
    }
  )
  return {
    read: () => {
      switch (state) {
        case 'pending':
          throw promise
        case 'rejected':
          throw error
        default:
          return data
      }
    }
  }
}
