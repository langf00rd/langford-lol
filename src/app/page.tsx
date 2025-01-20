import Left from '@/components/left'
import Right from '@/components/right'
import Wrapper from '@/components/wrapper'
import {
  getBio,
  getCTA,
  getOtherLinks,
  getProjects,
  getSkills,
  getSocialMedia,
  getWorkHistory
} from '@/utils/services'
import { ExternalLink } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export const dynamic = 'force-dynamic'
export const revalidate = 0
export const fetchCache = 'force-no-store'

export const metadata = {
  title: 'langford k. quarshie // 🇬🇭',
  openGraph: {
    images: [
      {
        url:
          process.env.NEXT_PUBLIC_SITE_URL +
          `/api/og?title=langford kwabena quarshie // 🇬🇭`,
        width: 1200,
        height: 600,
        alt: `cover photo for the Langford K. Quarshie's website`
      }
    ]
  }
}

export default async function Home() {
  const workHistory = await getWorkHistory()
  const projects = await getProjects()
  const skills = await getSkills()
  const bio = await getBio()
  const cta = await getCTA()
  const otherLinks = await getOtherLinks()
  const socialMedia = await getSocialMedia()
  return (
    <div className="-mt-10">
      {bio.photo?.url && (
        <>
          <Image
            src={bio.photo.url}
            alt="langford k. quarshie"
            width={200}
            height={200}
            className="mx-auto"
          />
          <hr />
        </>
      )}
      <Wrapper>
        <Left title={bio.fullName}>
          <p>{bio.primaryRole}</p>
        </Left>
        <Right>
          <p>{bio.description}</p>
          <ul className="flex flex-wrap mt-10 gap-5 gap-y-2">
            {[...otherLinks, ...socialMedia].map((social) => (
              <li key={social.label}>
                <Link
                  href={social.url}
                  target="_blank"
                  className="flex items-center gap-1 text-gray-500"
                >
                  {social.label}
                  <ExternalLink size={12} />
                </Link>
              </li>
            ))}
          </ul>
        </Right>
      </Wrapper>
      <Wrapper>
        <Left title="skills" />
        <Right>
          <ul className="grid md:grid-cols-2 gap-5">
            {skills.map((skill) => (
              <li key={skill.id}>
                <p>{skill.name}</p>
              </li>
            ))}
          </ul>
        </Right>
      </Wrapper>
      <Wrapper>
        <Left title="work history" />
        <Right>
          <ul className="space-y-5">
            {workHistory.map((history) => (
              <li key={history.id}>
                <div className="flex items-center justify-between">
                  <h2>{history.companyName}</h2>
                  <p className="text-sm">{history.startDate.split('-')[0]}</p>
                </div>
                <p>{history.role}</p>
              </li>
            ))}
          </ul>
        </Right>
      </Wrapper>
      <Wrapper>
        <Left title="projects" />
        <Right>
          <ul className="space-y-10">
            {projects.map((project) => (
              <li key={project.id} className="space-y-2">
                <Link
                  href={project.externalUrl ?? '#'}
                  className="flex items-center gap-1"
                  target="_blank"
                >
                  <h2>{project.title}</h2>
                  <ExternalLink size={12} />
                </Link>
                <Image
                  src={project.featuredPhoto.url}
                  alt={project.title}
                  width={1000}
                  height={500}
                  className="bg-gray-100 rounded-xl"
                />
              </li>
            ))}
          </ul>
        </Right>
      </Wrapper>
      <div className="flex flex-col items-center justify-center py-5">
        <h1 className="text-xl">{cta.title}</h1>
        <p>{cta.description}</p>
        <Link href={cta.ctaButtonUrl ?? '#'} target="_blank">
          <button className="fixed animate-bounce bottom-20 right-10 md:right-20 text-sm pt-1 pb-[5px] shadow-2xl bg-blue-600 text-white px-3 rounded-full">
            {cta.ctaButtonLabel}
          </button>
        </Link>
      </div>
    </div>
  )
}
