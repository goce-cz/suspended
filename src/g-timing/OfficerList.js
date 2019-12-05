import React from 'react'
import { cachedListOfficers } from './officer-details-cache'

export const OfficerList = ({ onOfficerClick }) => {
  const officers = cachedListOfficers()
  return (
    <table>
      <thead>
      <tr>
        <th>Badge ID</th>
        <th>Surname</th>
      </tr>
      </thead>
      <tbody>
      {
        officers.map(({ badgeId, surname }) => (
          <tr onClick={() => onOfficerClick(badgeId)} className='clickableRow' key={badgeId}>
            <td>{badgeId}</td>
            <td>{surname}</td>
          </tr>
        ))
      }
      </tbody>
    </table>
  )
}
