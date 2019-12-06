import React from 'react'
import { Paper, Table, TableBody, TableRow, TableCell, TableHead } from '@material-ui/core'

import { cachedListOfficers } from './officer-details-cache'

export const OfficerList = ({ onOfficerClick }) => {
  const officers = cachedListOfficers()
  return (
    <Paper>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Badge ID</TableCell>
            <TableCell>Surname</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
      {
        officers.map(({ badgeId, surname }) => (
          <TableRow onClick={() => onOfficerClick(badgeId)} className='clickableRow' key={badgeId}>
            <TableCell>{badgeId}</TableCell>
            <TableCell>{surname}</TableCell>
          </TableRow>
        ))
      }
        </TableBody>
      </Table>
    </Paper>
  )
}
