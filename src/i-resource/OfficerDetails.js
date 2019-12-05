import React from 'react'

export const OfficerDetails = ({ resource }) => {
  const {
    badgeId,
    rank,
    firstName,
    surname,
    status
  } = resource.read()

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
      </tbody>
    </table>
  )
}
