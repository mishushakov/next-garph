import { query } from './../utils/client'

export function userQuery () {
  const userQuery = query.user

  return {
    name: userQuery.name,
    friends: userQuery.friends.map(fields => ({ ...fields }))
  }
}
