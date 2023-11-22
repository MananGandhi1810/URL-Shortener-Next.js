import { redirect } from 'next/navigation'
import Link from 'next/link'

export default function Home () {
  // redirect('https://manangandhi.tech/')

  return (
    <h1>
      Hello!
      {/* Link to go to /go/manan */}
      <Link
        href={{
          pathName: '/go/[slug]',
          query: {
            slug: 'manan'
          }
        }}
      >
        Click
      </Link>
    </h1>
  )
}
