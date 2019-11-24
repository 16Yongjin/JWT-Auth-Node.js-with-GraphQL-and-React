import * as React from 'react'
import { useUsersQuery } from '../generated/graphql'

interface Props {}

export const Home: React.FC<Props> = () => {
  const { data } = useUsersQuery({ fetchPolicy: 'network-only' })

  if (!data) {
    return <div>loading...</div>
  }

  return (
    <div>
      <div>users:</div>

      <ul>
        {data.users.map(v => {
          return (
            <li key={v.id}>
              {v.email}, {v.id}
            </li>
          )
        })}
      </ul>
    </div>
  )
}
