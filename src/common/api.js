import { delay } from './utils'
import moment from 'moment'

export const db = {
  officers: [
    {
      badgeId: 487489,
      rank: 'lethal-weapon',
      firstName: 'Martin',
      surname: 'Riggs',
      status: 'suspended'
    },
    {
      badgeId: 798874,
      rank: 'sergeant',
      firstName: 'Roger',
      surname: 'Murtaugh',
      status: 'suspended'
    },
    {
      badgeId: 129038,
      rank: 'lieutenant ',
      firstName: 'John',
      surname: 'McClane',
      status: 'suspended'
    }
  ],
  kills: [
    {
      badgeId: 798874,
      villain: 'R.S.A. ambassador'
    },
    {
      badgeId: 487489,
      villain: 'mr. Joshua'
    },
    {
      badgeId: 487489,
      villain: 'Jack Travis'
    },
    {
      badgeId: 129038,
      villain: 'Hans Gruber'
    },
    {
      badgeId: 129038,
      villain: 'Karl Vreski'
    },
    {
      badgeId: 129038,
      villain: 'William Stuart'
    },
    {
      badgeId: 129038,
      villain: 'Major Grant'
    },
    {
      badgeId: 129038,
      villain: 'Simon Gruber'
    }
  ]
}

const logTiming = message => console.log(moment().format('mm:ss,SSS'), message)

export const listOfficers = async () => {
  logTiming('<listOfficers>')
  await delay(3000)
  logTiming('</listOfficers>')
  return db.officers.map(({ badgeId, surname }) => ({ badgeId, surname }))
}

export const getOfficer = async (badgeId) => {
  logTiming('<getOfficer>')
  await delay(2000)
  logTiming('</getOfficer>')
  const officer = db.officers.find(person => person.badgeId === badgeId)
  if (officer) {
    return officer
  } else {
    throw new Error(`no records for badge ID = '${badgeId}'`)
  }
}

export const listKills = async badgeId => {
  logTiming('<listKills>')
  await delay(1000)
  logTiming('</listKills>')
  return db.kills.filter(kill => kill.badgeId === badgeId)
}
