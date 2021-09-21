import { useLazyQuery } from '@apollo/client'
import { GET_ROCKETS } from '../queries/queries'
interface Rocket {
  id: string
  name: string
  mass: {
    kg: number
  }
  height: {
    meters: number
  }
  diameter: {
    meters: number
  }
}
interface RocketsRes {
  rockets: Rocket[]
}
export const useGetRockets = () => {
  const [getRockets, { data: dataLazy, error: errorLazy, loading }] =
    useLazyQuery<RocketsRes>(GET_ROCKETS, {
      fetchPolicy: 'network-only',
    })
  return { loading, getRockets, dataLazy }
}
