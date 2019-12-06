import React from 'react'
import { Paper, Table, TableBody, TableRow, TableCell, TableHead } from '@material-ui/core'

import { cachedFetcher } from '../common/cached-fetcher'
import { listOfficers } from '../common/api'

const cachedListOfficers = cachedFetcher(listOfficers)

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
