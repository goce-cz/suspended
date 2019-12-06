import React, { useEffect, useState } from 'react'

import { getOfficer } from '../z-common/api'
import { Paper, Table, TableBody, TableRow, TableCell } from '@material-ui/core'
import { InlineThrobber } from '../z-common/InlineThrobber'

export const OfficerDetails = ({ badgeId }) => {
  const [officer, setOfficer] = useState()
  useEffect(
    () => {
      (async () => {
        const response = await getOfficer(badgeId)
        setOfficer(response)
      })()
    },
    [badgeId, setOfficer]
  )

  if (!officer || officer.badgeId !== badgeId) {
    return <InlineThrobber>Loading details...</InlineThrobber>
  }

  const {
    rank,
    firstName,
    surname,
    status
  } = officer

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
        </TableBody>
      </Table>
    </Paper>
  )
}
