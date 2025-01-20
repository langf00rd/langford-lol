import { HygraphClient } from './client'
import {
  BioResponse,
  CTAResponse,
  IBio,
  ICTA,
  INavigation,
  IProject,
  ISkills,
  IWorkHistory,
  OtherLinksResponse,
  ProjectResponse,
  SkillsResponse,
  SocialMediaResponse,
  WorkHistoryResponse
} from './generics'
import {
  Bio,
  CTA,
  OtherLinks,
  Project,
  Skills,
  SocialMedium,
  WorkHistory
} from './queries'

export async function getBio(): Promise<IBio> {
  const client = HygraphClient()
  const result = (await client.request(Bio)) as BioResponse
  return result.bios && result.bios[0]
}

export async function getCTA(): Promise<ICTA> {
  const client = HygraphClient()
  const result = (await client.request(CTA)) as CTAResponse
  return result.ctas && result.ctas[0]
}

export async function getWorkHistory(): Promise<IWorkHistory[]> {
  const client = HygraphClient()
  const result = (await client.request(WorkHistory)) as WorkHistoryResponse
  return result.workHistories[0]?.items
}

export async function getProjects(): Promise<IProject[]> {
  const client = HygraphClient()
  const result = (await client.request(Project)) as ProjectResponse
  return result.projects[0]?.items
}

export async function getSkills(): Promise<ISkills[]> {
  const client = HygraphClient()
  const result = (await client.request(Skills)) as SkillsResponse
  return result.skills[0]?.items
}

export async function getOtherLinks(): Promise<INavigation[]> {
  const client = HygraphClient()
  const result = (await client.request(OtherLinks)) as OtherLinksResponse
  return result.otherLinks[0]?.items
}

export async function getSocialMedia(): Promise<INavigation[]> {
  const client = HygraphClient()
  const result = (await client.request(SocialMedium)) as SocialMediaResponse
  return result.socialMedias[0]?.items
}
