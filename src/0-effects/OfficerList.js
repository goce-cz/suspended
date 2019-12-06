import React, { useEffect, useState } from 'react'
import { Paper, Table, TableBody, TableRow, TableCell, TableHead } from '@material-ui/core'

import { listOfficers } from '../common/api'
import { InlineThrobber } from '../common/InlineThrobber'

export const OfficerList = ({ onOfficerClick }) => {
  const [officers, setOfficers] = useState()
  useEffect(
    () => {
      (async () => {
        const response = await listOfficers()
        setOfficers(response)
      })()
    },
    []
  )

  if (!officers) {
    return <InlineThrobber>Loading list...</InlineThrobber>
  }

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
              <TableRow hover onClick={() => onOfficerClick(badgeId)} key={badgeId}>
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
