import { redirect } from 'next/navigation'

export default function Home () {
  redirect('https://manangandhi.tech/')

  return (
    <h1>
      Hello!
    </h1>
  )
}
