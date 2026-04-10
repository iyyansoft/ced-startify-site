// import { createFileRoute } from '@tanstack/react-router'

// export const Route = createFileRoute('/beneficiaries')({
//   component: RouteComponent,
// })

// function RouteComponent() {
//   return <div>Hello "/beneficiaries"!</div>
// }


import { createFileRoute } from '@tanstack/react-router'
import Beneficiaries from '@/pages/Beneficiaries'

export const Route = createFileRoute('/beneficiaries')({
  component: Beneficiaries,
})