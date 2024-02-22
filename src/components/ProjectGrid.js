import { Text, Stack, Grid, Box, Heading } from '@chakra-ui/react'
import React from 'react'

const projects = [
  {
    title: 'reverie',
    tags: ['hackathon', 'ux design'],
    image: './images/reverieThumb.png',
    desc: 'made in 24h. awarded 1st place out of 400+ participants for hopperhacks 2024. created the idea, presentation, video editing, ux/ui design, and custom graphics.',
  },
  {
    title: 'storiator',
    tags: ['startup', 'ux design', 'frontend'],
    image: './images/storiatorThumb.png',
    desc: 'designed user experience through market research and competitor analysis, programmed frontend with react, chakra ui, and typescript.',
  },
  {
    title: 'studyscout',
    tags: ['hackathon', 'ux design', 'frontend'],
    image: './images/studyThumb.png',
    desc: 'made in 24h. awarded 3x place out of 700 participants for nwhacks 2024. designed ux/ui and programmed frontend in react and typescript to deploy functional website.',
  },

  {
    title: 'pawfect one',
    tags: ['hackathon', 'ux design'],
    image: './images/pawfectThumb.png',
    desc: 'made in 12h. awarded top 5 finalist out of 250 participants for my first hackathon, hackcamp 2023. designed user experience, custom graphics, and presentation video for figma prototype.',
  },
]

function ProjectComponent({ title, tags, image, desc }) {
  let tagString = tags
    .map((tag, index) => (index !== 0 ? ' • ' : '') + tag)
    .join('')
  return (
    <Stack marginBlock="2rem" gap="0">
      <Box
        height={['50vw', '50vw', '30vw']}
        bgPosition="top"
        bgImage={`url(${image})`} // Use template literals to set the background image
        bgSize="cover" // Ensure the background image covers the entire box
        boxShadow="0 4px 12px rgba(63, 57, 69, 0.1)"
        borderRadius="6px"
        transition="filter 0.3s ease-in-out"
        _hover={{ filter: 'brightness(0.5)' }}
      ></Box>
      <Text
        as="span"
        width="fit-content"
        marginTop="1.6rem"
        bgImage="linear-gradient(to right, #FF00A8, #FFB321)"
        bgSize="cover"
        backgroundClip="text"
      >
        {tagString}
      </Text>
      <Stack direction="row" alignItems="center">
        <Heading>{title}</Heading>
        <Box
          bgImage={`./images/Arrow 2.svg`}
          width="1rem"
          height="1rem"
          bgSize="cover"
        />
      </Stack>
      <Text
        lineHeight="1.6em"
        marginTop="0.5rem"
        color="base.500"
        fontWeight="light"
      >
        {desc}
      </Text>
    </Stack>
  )
}

function ProjectGrid() {
  return (
    <Grid
      templateColumns={['1fr', '1fr', '1fr 1fr']}
      marginInline={['1rem', '1rem', '4rem']}
      gap={4}
    >
      {projects.map((project, index) => (
        <ProjectComponent key={index} {...project} />
      ))}
    </Grid>
  )
}

export default ProjectGrid
