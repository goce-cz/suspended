import React, { Suspense } from 'react'
import { Paper, Table, TableBody, TableRow, TableCell } from '@material-ui/core'

import { cachedFetcher } from '../common/cached-fetcher'
import { getOfficer } from '../common/api'
import { KillList } from './KillList'
import { InlineThrobber } from '../common/InlineThrobber'

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
            <TableCell component="th">Badge ID</TableCell>
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
              <Suspense fallback={<InlineThrobber>Loading kills...</InlineThrobber>}>
                <KillList badgeId={badgeId}/>
              </Suspense>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  )
}
