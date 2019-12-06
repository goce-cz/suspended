import React, { Suspense, SuspenseList, useState, useTransition } from 'react'

import { OfficerList } from '../h-resource/OfficerList'
import { OfficerDetails } from '../h-resource/OfficerDetails'
import { createResource } from '../z-common/resource'
import { getOfficer, listOfficers } from '../z-common/api'
import { InlineThrobber } from '../z-common/InlineThrobber'
import { useSlowMo } from '../z-common/slowmo'

export const OfficerManagement = () => {
  const [slowMoRatio] = useSlowMo()
  const [officerListResource] = useState(() => createResource(listOfficers()))
  const [officerResource, setOfficerResource] = useState(null)
  const [startTransition, isPending] = useTransition({
    timeoutMs: 1000*slowMoRatio
  })

  const handleOfficerClick = badgeId => {
    startTransition(() => {
      setOfficerResource(createResource(getOfficer(badgeId)))
    })
  }

  return (
    <>
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
      {isPending && <InlineThrobber>Loading while display stale data...</InlineThrobber>}
    </>
  )
}
