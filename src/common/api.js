import { delay } from './utils'

export const db = [
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
  }
]

export const getOfficer = async (badgeId) => {
  await delay(3000)
  const officer = db.find(person => person.badgeId === badgeId)
  if (officer) {
    return officer
  } else {
    throw new Error(`no records for badge ID = '${badgeId}'`)
  }
}

export const listOfficers = async () => {
  await delay(2000)
  return [
    ...db.map(({ badgeId, surname }) => ({ badgeId, surname })),
    { badgeId: 666, surname: 'Vigilante' }
  ]
}
