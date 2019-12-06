import React from 'react'
import { Paper, Table, TableBody, TableRow, TableCell } from '@material-ui/core'

export const OfficerDetails = ({ resource }) => {
  const {
    badgeId,
    rank,
    firstName,
    surname,
    status
  } = resource.read()

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
