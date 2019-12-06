import React from 'react'
import { CircularProgress, Typography } from '@material-ui/core'

export const InlineThrobber = ({ children }) => (
  <Typography variant='body2' component='div' style={{margin: 10}}><CircularProgress size={15}/> {children}</Typography>
)
