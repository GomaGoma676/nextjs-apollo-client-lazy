import { gql } from '@apollo/client'

export const GET_ROCKETS = gql`
  query GetRockets {
    rockets {
      id
      name
      mass {
        kg
      }
      height {
        meters
      }
      diameter {
        meters
      }
    }
  }
`
