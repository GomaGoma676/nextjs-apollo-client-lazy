import { useGetRockets } from '../hooks/useGetRockets'
import { Layout } from '../components/Layout'

export default function Home() {
  const { loading, dataLazy, getRockets } = useGetRockets()
  if (loading) {
    return <Layout title="SpaceX">Loading...🚀</Layout>
  }
  return (
    <Layout title="SpaceX">
      <p className="mb-6 font-bold">SpaceX GraphQL API</p>
      <button
        className="my-3 py-1 px-3 text-white bg-indigo-600 hover:bg-indigo-700 rounded focus:outline-none"
        onClick={() => {
          getRockets()
        }}
      >
        Get data
      </button>
      {dataLazy?.rockets.map((rocket) => {
        return (
          <p className="my-1" key={rocket.id}>
            {rocket.name}
          </p>
        )
      })}
    </Layout>
  )
}
