export const Bio = `
  query getBios {
    bios(first: 1) {
      description
      primaryRole
      fullName
      photo {
        url
      }
    }
  }
`

export const CTA = `
  query getCTA {
    ctas {
      title
      description
      ctaButtonLabel
      ctaButtonUrl
    }
  }
`

export const WorkHistory = `
  query getWorkHistory {
    workHistories {
      items {
        id
        companyName
        startDate
        endDate
        role
      }
    }
  }
`

export const Project = `
  query getProjects {
    projects {
      items {
        title
        id
        description
        caseStudyContent
        externalUrl
        featuredPhoto {
          url
        }
      }
    }
  }
`

export const Skills = `
  query getSkills {
    skills {
      items {
        id
        name
      }
    }
  }
`

export const OtherLinks = `
  query getOtherLinks {
    otherLinks {
      items {
        icon {
          url
        }
        label
        url
      }
    }
  }
`

export const SocialMedium = `
  query getSocialMedium {
    socialMedias {
      items {
        icon {
          url
        }
        label
        url
      }
    }
  }
`
