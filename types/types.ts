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
export interface RocketsRes {
  rockets: Rocket[]
}
