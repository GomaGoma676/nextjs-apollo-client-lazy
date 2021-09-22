import { useLazyQuery } from '@apollo/client'
import { GET_ROCKETS } from '../queries/queries'
import { RocketsRes } from '../types/types'

export const useGetRockets = () => {
  const [
    getRockets,
    { data: dataLazy, error: errorLazy, loading: loadingLazy },
  ] = useLazyQuery<RocketsRes>(GET_ROCKETS, {
    fetchPolicy: 'network-only',
  })
  return { loadingLazy, getRockets, dataLazy }
}
