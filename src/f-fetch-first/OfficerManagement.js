import React, { Suspense, useTransition } from 'react'

import { useBadgeId } from '../common/utils'
import { OfficerList } from '../a-single/OfficerList'
import { OfficerDetails } from './OfficerDetails'
import { cachedGetOfficer } from '../g-timing/officer-details-cache'

export const OfficerManagement = () => {
  const [badgeId, setBadgeId] = useBadgeId()
  const [startTransition] = useTransition({
    timeoutMs: 3000
  })

  const handleOfficerClick = badgeId => {
    startTransition(() => {
      setBadgeId(badgeId)
      cachedGetOfficer()
    })
  }

  return (
    <>
      <Suspense fallback={<div>Loading list...</div>}>
        <OfficerList onOfficerClick={handleOfficerClick}/>
      </Suspense>
      <Suspense fallback={<div>Loading details...</div>}>
        {
          badgeId &&
          <OfficerDetails badgeId={badgeId}/>
        }
      </Suspense>
    </>
  )
}
