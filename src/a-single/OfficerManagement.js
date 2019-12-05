import React, { Suspense } from 'react'

import { OfficerList } from './OfficerList'
import { OfficerDetails } from './OfficerDetails'
import { useBadgeId } from '../common/utils'

export const OfficerManagement = () => {
  const [badgeId, setBadgeId] = useBadgeId()
  return (
    <>
      <Suspense fallback={<div>Loading</div>}>
        <OfficerList onOfficerClick={setBadgeId}/>
        {
          badgeId &&
          <OfficerDetails badgeId={badgeId}/>
        }
      </Suspense>
    </>
  )
}
