import React from 'react'
import { cachedFetcher } from '../common/cached-fetcher'
import { listKills } from '../common/api'

const cachedListKills = cachedFetcher(listKills)

export const KillList = ({ badgeId }) => {
  const kills = cachedListKills(badgeId)
  console.log(kills)
  return (
    <>
      {kills.map(({ villain }) => <div key={villain}>{villain}</div>)}
    </>
  )
}
