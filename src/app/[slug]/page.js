import { redirect } from 'next/navigation'
import routes from '../../routes.json'

export default function Go ({ params }) {
  const { slug } = params
  console.log('routes', routes)
  const route = routes[slug]
  console.log('route', route)
  if (route) {
    redirect(route)
  }

  return <h1>Redirecting...</h1>
}
