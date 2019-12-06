import React from 'react'

import { cachedFetcher } from '../common/cached-fetcher'
import { getOfficer } from '../common/api'
import { Paper, Table, TableBody, TableRow, TableCell } from '@material-ui/core'

const cachedGetOfficer = cachedFetcher(getOfficer)

export const OfficerDetails = ({ badgeId }) => {
  const {
    rank,
    firstName,
    surname,
    status
  } = cachedGetOfficer(badgeId)

  return (
    <Paper>
<Table>
      <TableBody>
        <TableRow>
          <TableCell>Badge ID</TableCell>
          <TableCell>{badgeId}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell component="th">Rank</TableCell>
          <TableCell>{rank}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell component="th">Name</TableCell>
          <TableCell>{firstName} {surname}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell component="th">Status</TableCell>
          <TableCell>{status}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
</Paper>
  )
}
