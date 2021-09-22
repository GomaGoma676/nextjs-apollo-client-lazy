import { useQuery } from '@apollo/client'
import { GET_ROCKETS } from '../queries/queries'
import { RocketsRes } from '../types/types'

export const useQueryGetRockets = () => {
  const { data, error, loading } = useQuery<RocketsRes>(GET_ROCKETS, {
    fetchPolicy: 'network-only',
  })
  return { data, error, loading }
}
