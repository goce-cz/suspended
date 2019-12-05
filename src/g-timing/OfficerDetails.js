import React, { Suspense } from 'react'

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
    <table>
      <tbody>
      <tr>
        <th>Badge ID</th>
        <td>{badgeId}</td>
      </tr>
      <tr>
        <th>Rank</th>
        <td>{rank}</td>
      </tr>
      <tr>
        <th>Name</th>
        <td>{firstName} {surname}</td>
      </tr>
      <tr>
        <th>Status</th>
        <td>{status}</td>
      </tr>
      <tr>
        <th>Kills</th>
        <td>
          <Suspense fallback='Loading kills...'>
            <KillList badgeId={badgeId}/>
          </Suspense>
        </td>
      </tr>
      </tbody>
    </table>
  )
}
