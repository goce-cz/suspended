import React, { Suspense, SuspenseList, useState } from 'react'

import { OfficerList } from '../i-resource/OfficerList'
import { OfficerDetails } from '../i-resource/OfficerDetails'
import { createResource } from '../common/resource'
import { getOfficer, listOfficers } from '../common/api'

export const OfficerManagement = () => {
  const [officerListResource] = useState(() => createResource(listOfficers()))
  const [officerResource, setOfficerResource] = useState(null)

  const handleOfficerClick = badgeId => setOfficerResource(createResource(getOfficer(badgeId)))

  return (
    <SuspenseList revealOrder="forwards">
      <Suspense fallback={<div>Loading list...</div>}>
        <OfficerList resource={officerListResource} onOfficerClick={handleOfficerClick}/>
      </Suspense>
      <Suspense fallback={<div>Loading details...</div>}>
        {
          officerResource &&
          <OfficerDetails resource={officerResource}/>
        }
      </Suspense>
    </SuspenseList>
  )
}
