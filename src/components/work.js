/** @jsx jsx */
import { jsx } from 'theme-ui'
import styled from '@emotion/styled'

import Image from './shared/Image'
import { Heading, Paragraph } from './shared/Typography'
import {
  SectionContainer,
  ContentContainer,
  CardGrid,
} from './shared/Containers'
import ProjectCard from './ProjectCard'

import WorkRightSideBarSVG from '../images/WorkRightSideBar.svg'
import WorkLeftSideBarSVG from '../images/WorkLeftSideBar.svg'

import CardSurgeIcon from '../images/CardSurgeIcon.svg'
import SyntheticIcon from '../images/SyntheticIcon.svg'
import MoreIcon from '../images/MoreIcon.svg'
import SolJournalIcon from '../images/SolJournalIcon.svg'

const Description = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`

const Hero = () => (
  <SectionContainer id="projects">
    <Image
      src={WorkLeftSideBarSVG}
      sx={{ position: 'absolute', left: 0 }}
      lighten
    />
    <Image
      src={WorkRightSideBarSVG}
      sx={{ position: 'absolute', right: 0 }}
      lighten
    />
    <ContentContainer style={{ gridGap: 30 }} numColumns={1}>
      <Description>
        <Heading>Projects</Heading>
        <Paragraph size="xlarge" weight="bold">
          Some things I've built
        </Paragraph>
      </Description>
      <CardGrid>
        <ProjectCard
          icon={SyntheticIcon}
          title="Synthetic"
          desc="A Spotify powered, data-driven web app to discover new musics"
          link="https://synthetic.netlify.com"
          repoName="synthetic"
        />
        <ProjectCard
          icon={CardSurgeIcon}
          title="Card Surge"
          desc="A playground for designing cards and drop shadows for user interfaces"
          link="https://card.surge.sh"
          repoName="card-surge"
        />
        <ProjectCard
          icon={SolJournalIcon}
          title="Sol Journal"
          desc="An open source, offline, personal journaling platform"
          link="https://soljournal.netlify.com"
          repoName="sol-journal"
        />
        <ProjectCard
          icon={MoreIcon}
          title="More"
          desc="I’ve made all sorts of apps, bots, and side projects that live on my Github"
          link="https://github.com/gillkyle"
        />
      </CardGrid>
    </ContentContainer>
  </SectionContainer>
)

export default Hero
