import React, { Suspense } from 'react'

import { useBadgeId } from '../z-common/utils'
import { OfficerList } from '../a-single/OfficerList'
import { OfficerDetails } from '../a-single/OfficerDetails'
import { InlineThrobber } from '../z-common/InlineThrobber'

export const OfficerManagement = () => {
  const [badgeId, setBadgeId] = useBadgeId()
  return (
    <>
      <Suspense fallback={<InlineThrobber>Loading list...</InlineThrobber>}>
        <OfficerList onOfficerClick={setBadgeId}/>
      </Suspense>
      <Suspense fallback={<InlineThrobber>Loading details...</InlineThrobber>}>
        {
          badgeId &&
          <OfficerDetails badgeId={badgeId}/>
        }
      </Suspense>
    </>
  )
}
