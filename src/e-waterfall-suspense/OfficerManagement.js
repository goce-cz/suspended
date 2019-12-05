import React, { Suspense } from 'react'

import { useBadgeId } from '../common/utils'
import { OfficerList } from '../a-single/OfficerList'
import { OfficerDetails } from '../e-waterfall-suspense/OfficerDetails'

export const OfficerManagement = () => {
  const [badgeId, setBadgeId] = useBadgeId()
  return (
    <>
      <Suspense fallback={<div>Loading list...</div>}>
        <OfficerList onOfficerClick={setBadgeId}/>
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
