import React, { Suspense } from 'react'

import { useBadgeId } from '../common/utils'
import { OfficerList } from '../a-single/OfficerList'
import { OfficerDetails } from '../a-single/OfficerDetails'
import { ErrorBoundary } from '../common/ErrorBoundary'

export const OfficerManagement = () => {
  const [badgeId, setBadgeId] = useBadgeId()
  return (
    <ErrorBoundary renderError={error => <p>{error.message}</p>}>
      <Suspense fallback={<div>Loading list...</div>}>
        <OfficerList onOfficerClick={setBadgeId}/>
      </Suspense>
      <Suspense fallback={<div>Loading details...</div>}>
        {
          badgeId &&
          <OfficerDetails badgeId={badgeId}/>
        }
      </Suspense>
    </ErrorBoundary>
  )
}
