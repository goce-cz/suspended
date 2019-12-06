import React from 'react'
import { Paper, Table, TableBody, TableRow, TableCell } from '@material-ui/core'

import { cachedFetcher } from '../z-common/cached-fetcher'
import { getOfficer, listKills } from '../z-common/api'

const cachedGetOfficer = cachedFetcher(getOfficer)
const cachedListKills = cachedFetcher(listKills)

export const OfficerDetails = ({ badgeId }) => {
  const {
    rank,
    firstName,
    surname,
    status
  } = cachedGetOfficer(badgeId)

  const kills = cachedListKills(badgeId)

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
              {kills.map(({ villain }) => <div key={villain}>{villain}</div>)}
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Paper>
  )
}
