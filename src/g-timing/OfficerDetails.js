import React, { Suspense } from 'react'
import { Paper, Table, TableBody, TableRow, TableCell } from '@material-ui/core'

import { KillList } from './KillList'
import { cachedGetOfficer } from './officer-details-cache'


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
      <TableRow>
        <TableCell component="th">Kills</TableCell>
        <TableCell>
          <Suspense fallback='Loading kills...'>
            <KillList badgeId={badgeId}/>
          </Suspense>
        </TableCell>
      </TableRow>
      </TableBody>
    </Table>
</Paper>
  )
}
