import { query } from './../utils/client'

export function userQuery () {
  const { user } = query

  return {
    name: user.name,
    age: user.age,
    // friends: user.friends.map(fields => ({ ...fields }))
  }
}
