import React, { Suspense } from 'react'

import { OfficerList } from './OfficerList'
import { OfficerDetails } from './OfficerDetails'
import { useBadgeId } from '../z-common/utils'
import { InlineThrobber } from '../z-common/InlineThrobber'

export const OfficerManagement = () => {
  const [badgeId, setBadgeId] = useBadgeId()
  return (
    <>
      <Suspense fallback={<InlineThrobber>Loading</InlineThrobber>}>
        <OfficerList onOfficerClick={setBadgeId}/>
        {
          badgeId &&
          <OfficerDetails badgeId={badgeId}/>
        }
      </Suspense>
    </>
  )
}
