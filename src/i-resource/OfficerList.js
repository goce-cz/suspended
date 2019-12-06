import React from 'react'
import { Paper, Table, TableBody, TableRow, TableCell, TableHead } from '@material-ui/core'

export const OfficerList = ({ resource, onOfficerClick }) => {
  const officers = resource.read()

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
