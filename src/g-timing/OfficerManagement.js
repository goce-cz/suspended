import React, { Suspense, SuspenseList } from 'react'

import { useBadgeId } from '../z-common/utils'
import { OfficerList } from '../g-timing/OfficerList'
import { OfficerDetails } from '../g-timing/OfficerDetails'
import { InlineThrobber } from '../z-common/InlineThrobber'

export const OfficerManagement = () => {
  const [badgeId, setBadgeId] = useBadgeId()
  return (
    <SuspenseList revealOrder="forwards">
      <Suspense fallback={<InlineThrobber>Loading list...</InlineThrobber>}>
        <OfficerList onOfficerClick={setBadgeId}/>
      </Suspense>
      <Suspense fallback={<InlineThrobber>Loading details...</InlineThrobber>}>
        {
          badgeId &&
          <OfficerDetails badgeId={badgeId}/>
        }
      </Suspense>
    </SuspenseList>
  )
}
