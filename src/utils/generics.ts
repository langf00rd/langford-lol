export interface IBio {
  description: string
  primaryRole: string
  fullName: string
  photo?: IImage
}

export interface IWorkHistory {
  id: string
  companyName: string
  startDate: string | null
  endDate: string | null
  role: string
  roleDescription: string | null
}

export interface IProject {
  title: string
  id: string
  description: string | null
  caseStudyContent: string | null
  externalUrl: string | null
  featuredPhoto: IImage
}

export interface ISkills {
  id: string
  name: string
}

export interface ICTA {
  title: string | null
  description: string | null
  ctaButtonUrl: string | null
  ctaButtonLabel: string | null
}

export interface INavigation {
  icon: string | null
  label: string
  url: string | null
}

interface IImage {
  url: string
}

export interface BioResponse {
  bios: IBio[]
}

export interface CTAResponse {
  ctas: ICTA[]
}

export interface WorkHistoryResponse {
  workHistories: {
    items: IWorkHistory[]
  }
}

export interface ProjectResponse {
  projects: { items: IProject[] }
}

export interface SkillsResponse {
  skills: { items: ISkills[] }
}

export interface OtherLinksResponse {
  otherLinks: { items: INavigation[] }
}

export interface SocialMediaResponse {
  socialMedias: { items: INavigation[] }
}
