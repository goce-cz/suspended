import React, { Suspense, SuspenseList, useTransition } from 'react'

import { useBadgeId } from '../common/utils'
import { OfficerList } from '../g-timing/OfficerList'
import { OfficerDetails } from '../g-timing/OfficerDetails'
import { cachedGetOfficer, cachedListKills } from '../g-timing/officer-details-cache'
import { Throbber } from '../common/Throbber'

export const OfficerManagementInner = () => {
  const [badgeId, setBadgeId] = useBadgeId()
  const [startTransition, isPending] = useTransition({
    timeoutMs: 1000
  })

  const handleOfficerClick = badgeId => {
    startTransition(() => {
      setBadgeId(badgeId)
      cachedGetOfficer(badgeId)
      cachedListKills(badgeId)
    })
  }
  console.log(isPending)

  return (
    <SuspenseList revealOrder='forwards'>
      <Suspense fallback={<div>Loading list...</div>}>
        <OfficerList onOfficerClick={handleOfficerClick}/>
      </Suspense>
      <Suspense fallback={<div>Loading details...</div>}>
        {
          badgeId &&
          <OfficerDetails badgeId={badgeId}/>
        }
      </Suspense>
      {isPending && <Throbber delay={500}/>}
    </SuspenseList>
  )
}

export const OfficerManagement = () => (
  <Suspense fallback='Shit...'>
    <OfficerManagementInner/>
  </Suspense>
)
