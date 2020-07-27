import React from 'react'
/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'

import Text from './shared/Text'
import Button from './shared/Button'
import Image from './shared/Image'
import Link from './shared/Link'
import { UList, ListItem } from './shared/List'
import { Heading, Paragraph } from './shared/Typography'
import { ContentContainer, SectionContainer } from './shared/Containers'

import ExpLeftSideBar from '../images/ExpLeftSideBar.svg'
import ExpRightSideBar from '../images/ExpRightSideBar.svg'

import BrixioLogo from '../images/logos/brixio.png'
import RavnLogo from '../images/logos/ravn.png'
import GatsbyLogo from '../images/logos/gatsby.png'
import ByuLogo from '../images/logos/byu.png'

import {
  COLORS,
  MEDIA_QUERIES,
  BORDER_RADIUS,
  TRANSITION,
} from '../styles/constants'

const Intro = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const IntroDescription = styled.div`
  margin-bottom: 25px;
`
const WorkContainer = styled.div`
  display: grid;
  grid-gap: 45px;
  grid-template-areas: 'companies info';
  grid-template-columns: 1fr 3fr;
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    grid-template-areas: 'companies' 'info';
    grid-template-columns: 1fr;
    grid-template-rows: auto auto;
  }
`
const WorkButtons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    flex-direction: row;
    overflow-x: scroll;
    border-bottom: 1px ${COLORS.lightWhite} solid;
    padding: 10px 5px;
  }
`
const Dot = styled.div`
  opacity: 0.5;
  transition: ${TRANSITION};
  display: inline-block;
  margin-right: 10px;
  vertical-align: center;
  height: 8px;
  width: 8px;
  background-color: ${[
    props => (props.active ? COLORS.gold : COLORS.lightGray),
  ]};
  border-radius: 50%;
`
const WorkButton = styled(Button)`
  display: flex;
  width: 100%;
  margin-bottom: 10px;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border-radius: ${BORDER_RADIUS.button};
  transition: ${TRANSITION};
  padding: 10px 30px;
  border: none;
  color: ${COLORS.lightGray};
  &:hover {
    background-color: ${COLORS.semiWhite};
    color: ${COLORS.white};
  }
  &:focus {
    color: ${COLORS.gold};
  }
  @media (max-width: ${MEDIA_QUERIES['mobile']}px) {
    margin-bottom: 0px;
    margin-right: 10px;
  }
`
const WorkDetails = styled.div`
  display: grid;
  grid-gap: 10px;
  grid-template-rows: auto auto 4fr;
  align-items: flex-start;
`
const RoundedImageContainer = styled.div`
  display: inline-block;
  border-radius: 10px;
  height: 45px;
  width: 45px;
  background-color: ${COLORS.lightWhite};
  padding: 5px;
  margin-right: 15px;
`

const jobs = [
  {
    company: 'Gatsby',
    logo: GatsbyLogo,
    jobTitle: 'Senior Software Engineer',
    dates: 'May 2020 - Present',
    bullets: [
      <Text>
        Built{' '}
        <Link href="https://www.gatsbyjs.com/careers/" target="_blank">
          custom HR pipeline
        </Link>{' '}
        integrating 3rd party HR platforms with a custom frontend and serverless
        backend
      </Text>,
      `Developed public user portals and internal admin tooling on company microservices`,
      `Core maintainer of docs and guides for official Gatsby documentation that received over 20 yearly million page views and regarded as some of the most comprehensive and approachable docs available`,
    ],
  },
  {
    company: 'Gatsby',
    logo: GatsbyLogo,
    jobTitle: 'Software Engineer Intern',
    dates: 'May 2019 - May 2020',
    bullets: [
      <Text>
        Built implementation of the{' '}
        <Link target="_blank" href="https://www.gatsbyjs.org/plugins/">
          Gatsby Plugin Library
        </Link>{' '}
        using React, Node, and Algolia
      </Text>,
      <Text>
        Wrote{' '}
        <Link
          target="_blank"
          href="https://www.gatsbyjs.org/docs/ecommerce-tutorial/"
        >
          Gatsby e-commerce Tutorial
        </Link>{' '}
        with a remote team using Gatsby, Stripe, and AWS Lambda
      </Text>,
      <Text>
        Made UX and design contributions to{' '}
        <Link target="_blank" href="https://www.gatsbyjs.org/showcase/">
          Gatsby's Site Showcase
        </Link>
      </Text>,
    ],
  },
  {
    company: 'Ravn',
    logo: RavnLogo,
    jobTitle: 'Full Stack Developer',
    dates: 'Jan 2018 - March 2019',
    bullets: [
      'Lead engineer on projects designing and developing Beynd backend/frontend including implementations of pagination, filtering, and push notifications with Rails, GraphQL, React, Postgres',
      <Text>
        Developed on a team launching{' '}
        <Link target="_blank" href="https://www.beynd.com/">
          Beynd.com
        </Link>{' '}
        marketing site using Gatsby, Prismic, Netlify
      </Text>,
      'Built and deployed serverless pipelines for exporting large data sets for Legasync using Rails, AWS Lambda, Node',
    ],
  },
  {
    company: 'Brixio',
    logo: BrixioLogo,
    jobTitle: 'Full Stack Developer',
    dates: 'Jan 2017 - Oct 2017',
    bullets: [
      'Rewrote sections of app frontend in React for web and mobile, significantly decreasing load times and bounce rates',
      'Developed a custom Slack bot integration to track lead engagement and apply bonuses based on activity and performance',
      'Contributed to an SEO friendly suite of landing pages that ranked highest among competitive keyword groups in real estate ',
    ],
  },
  {
    company: 'BYU',
    logo: ByuLogo,
    jobTitle: 'E-learning Developer',
    dates: 'Jan 2018 - Present',
    bullets: [
      <Text>
        Designed and developed{' '}
        <Link
          target="_blank"
          href="http://www.ala.org/news/member-news/2017/05/brigham-young-university-s-harold-b-lee-library-recipient-lirt-2017-innovation"
        >
          award-winning{' '}
        </Link>
        instructional web tools, used by 1000+ university students and dozens of
        professors at BYU with Javascript and the Adobe Creative Cloud
      </Text>,
      'Created promotional videos and graphics for first year writing classes that have 25,000+ views on YouTube with After Effects, Photoshop, and Illustrator',
    ],
  },
]

const Experience = () => {
  const [selectedIndex, setIndex] = React.useState(null)

  const onSelectJob = selectedIndex => setIndex(selectedIndex)

  const selectedJob = jobs[selectedIndex] || jobs[0]
  return (
    <SectionContainer id="experience" backgroundFilled>
      <Image
        src={ExpLeftSideBar}
        sx={{
          position: 'absolute',
          left: 0,
          transform: 'translateY(-50px)',
        }}
        lighten
      />
      <Image
        src={ExpRightSideBar}
        sx={{
          position: 'absolute',
          right: 0,
          transform: 'translateY(-50px)',
        }}
        lighten
      />
      <ContentContainer style={{ gridGap: 30 }}>
        <Intro>
          <Heading inverted>Experience</Heading>
          <IntroDescription>
            <Paragraph size="xlarge" weight="bold" color="lightWhite" inverted>
              Here are a few places I've worked
            </Paragraph>
          </IntroDescription>
        </Intro>
        <WorkContainer>
          <WorkButtons>
            {jobs.map((job, index) => (
              <WorkButton onClick={() => onSelectJob(index)}>
                <Dot active={index === selectedIndex} />
                {job.company}
              </WorkButton>
            ))}
          </WorkButtons>
          <WorkDetails>
            <div style={{ padding: '5px 0' }}>
              <Text color="white" size="xxlarge" weight="bold">
                {selectedJob.jobTitle}{' '}
              </Text>
              <Text color="gold" size="xxlarge" weight="bold">
                @ {selectedJob.company}
              </Text>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <RoundedImageContainer>
                <img
                  style={{ widght: 35, height: 35, borderRadius: 5 }}
                  src={selectedJob.logo}
                  alt=":("
                />
              </RoundedImageContainer>
              <Text color="lightWhite" size="medium">
                {selectedJob.dates}
              </Text>
            </div>
            <div>
              <Text color="lightWhite" size="medium">
                <UList columns={1} style={{ color: COLORS.white }}>
                  {selectedJob.bullets.map(bullet => (
                    <ListItem color="white">{bullet}</ListItem>
                  ))}
                </UList>
              </Text>
            </div>
          </WorkDetails>
        </WorkContainer>
      </ContentContainer>
    </SectionContainer>
  )
}

export default Experience
