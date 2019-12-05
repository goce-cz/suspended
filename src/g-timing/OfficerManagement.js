import React, { Suspense, SuspenseList } from 'react'

import { useBadgeId } from '../common/utils'
import { OfficerList } from '../g-timing/OfficerList'
import { OfficerDetails } from '../g-timing/OfficerDetails'

export const OfficerManagement = () => {
  const [badgeId, setBadgeId] = useBadgeId()
  return (
    <SuspenseList revealOrder="forwards">
      <Suspense fallback={<div>Loading list...</div>}>
        <OfficerList onOfficerClick={setBadgeId}/>
      </Suspense>
      <Suspense fallback={<div>Loading details...</div>}>
        {
          badgeId &&
          <OfficerDetails badgeId={badgeId}/>
        }
      </Suspense>
    </SuspenseList>
  )
}
