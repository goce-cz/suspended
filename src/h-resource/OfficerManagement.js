import React, { Suspense, SuspenseList, useState } from 'react'

import { OfficerList } from './OfficerList'
import { OfficerDetails } from './OfficerDetails'
import { createResource } from '../z-common/resource'
import { getOfficer, listOfficers } from '../z-common/api'
import { InlineThrobber } from '../z-common/InlineThrobber'

export const OfficerManagement = () => {
  const [officerListResource] = useState(() => createResource(listOfficers()))
  const [officerResource, setOfficerResource] = useState(null)

  const handleOfficerClick = badgeId => setOfficerResource(createResource(getOfficer(badgeId)))

  return (
    <SuspenseList revealOrder="forwards">
      <Suspense fallback={<InlineThrobber>Loading list...</InlineThrobber>}>
        <OfficerList resource={officerListResource} onOfficerClick={handleOfficerClick}/>
      </Suspense>
      <Suspense fallback={<InlineThrobber>Loading details...</InlineThrobber>}>
        {
          officerResource &&
          <OfficerDetails resource={officerResource}/>
        }
      </Suspense>
    </SuspenseList>
  )
}
