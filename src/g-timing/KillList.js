import React from 'react'

import { cachedListKills } from './officer-details-cache'

export const KillList = ({ badgeId }) => {
  const kills = cachedListKills(badgeId)
  return (
    <>
      {kills.map(({ villain }) => <div key={villain}>{villain}</div>)}
    </>
  )
}
