import React, { useEffect, useState } from 'react'
import { CircularProgress } from '@material-ui/core'

export const FullscreenThrobber = ({ delay = 1000 }) => {
  const [visible, setVisible] = useState(false)
  useEffect(
    () => {
      const timeout = setTimeout(() => setVisible(true), delay)
      return () => clearTimeout(timeout)
    },
    [setVisible]
  )

  return visible
    ? <CircularProgress className='throbber'/>
    : null
}
