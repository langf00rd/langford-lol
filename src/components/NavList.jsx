import Link from 'next/link'
import { SingleNav } from '@/queries/navigations'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'

async function getNav(navId) {
  const res = await fetch(process.env.HYGRAPH_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: SingleNav,
      variables: { navId: navId }
    })
  }).then((res) => res.json())

  if (res.errors) {
    console.error(res.errors)
    throw new Error(res.errors[0].message)
  }
  return res.data.navigation?.link
}

export default async function NavList({ navId }) {
  const navItems = await getNav(navId)
  return (
    <>
      {navItems?.map((navItem) => {
        const url = navItem?.externalUrl
          ? navItem.externalUrl
          : `/${navItem?.page?.slug}`
        return (
          <li key={navItem.id}>
            <Link
              href={`${url}`}
              className="dark:text-gray-400 text-gray-500 text-sm"
            >
              {navItem.displayText}
            </Link>
          </li>
        )
      })}
    </>
  )
}
