import React from 'react'

import { cachedFetcher } from '../common/cached-fetcher'
import { getOfficer, listKills } from '../common/api'

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
        <th>kills</th>
        <td>
          {kills.map(({ villain }) => <div key={villain}>{villain}</div>)}
        </td>
      </tr>
      </tbody>
    </table>
  )
}
