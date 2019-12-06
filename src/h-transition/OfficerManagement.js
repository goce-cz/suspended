import React, { Suspense, SuspenseList, useTransition } from 'react'

import { useBadgeId } from '../common/utils'
import { OfficerList } from '../g-timing/OfficerList'
import { OfficerDetails } from '../g-timing/OfficerDetails'
import { cachedGetOfficer, cachedListKills } from '../g-timing/officer-details-cache'
import { FullscreenThrobber } from '../common/FullscreenThrobber'
import { InlineThrobber } from '../common/InlineThrobber'

export const OfficerManagementInner = () => {
  const [badgeId, setBadgeId] = useBadgeId()
  const [startTransition, isPending] = useTransition({
    timeoutMs: 10000
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
      <Suspense fallback={<InlineThrobber>Loading list...</InlineThrobber>}>
        <OfficerList onOfficerClick={handleOfficerClick}/>
      </Suspense>
      <Suspense fallback={<InlineThrobber>Loading details...</InlineThrobber>}>
        {
          badgeId &&
          <OfficerDetails badgeId={badgeId}/>
        }
      </Suspense>
      {isPending && <FullscreenThrobber delay={500}/>}
    </SuspenseList>
  )
}

export const OfficerManagement = () => (
  <Suspense fallback='Shit...'>
    <OfficerManagementInner/>
  </Suspense>
)
