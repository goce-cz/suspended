import React from 'react'

import { OfficerList } from './OfficerList'
import { OfficerDetails } from './OfficerDetails'
import { useBadgeId } from '../z-common/utils'

export const OfficerManagement = () => {
  const [badgeId, setBadgeId] = useBadgeId()
  return (
    <>
      <OfficerList onOfficerClick={setBadgeId}/>
      {
        badgeId &&
        <OfficerDetails badgeId={badgeId}/>
      }
    </>
  )
}
