import React, { Suspense, SuspenseList } from 'react'

import { useBadgeId } from '../common/utils'
import { OfficerList } from '../a-single/OfficerList'
import { OfficerDetails } from '../a-single/OfficerDetails'

export const OfficerManagement = () => {
  const [badgeId, setBadgeId] = useBadgeId()
  console.log('yes, it\'s me')
  return (
    <SuspenseList revealOrder="together">
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
