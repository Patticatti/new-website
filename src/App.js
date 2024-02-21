import { Box, Stack, Text, Heading, Flex } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import ProjectGrid from './components/ProjectGrid'
import { useRef } from 'react'

function App() {
  const scrollWork = useRef(null)
  const scrollToWork = () => {
    scrollWork.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Box bg="white">
      <Stack alignItems="center">
        <Navbar scrollToWork={scrollToWork} />
        <Flex
          direction={['column-reverse', 'column-reverse', 'row']}
          justifyContent="space-between"
          alignItems="center"
          paddingBlock="5rem"
          maxWidth="1000px"
          justifySelf="center"
        >
          <Stack
            maxW={['85%', '85%', '465px']}
            textAlign={['center', 'center', 'left']}
            marginLeft={['0', '0', '48px']}
          >
            <Text fontSize="xl" color="base.700">
              hello,
            </Text>
            <Heading
              fontSize={['6xl', '6xl', '8xl']}
              letterSpacing="-0.03em"
              lineHeight="0.8em"
            >
              im patti.
            </Heading>
            <Text
              color="base.700"
              fontSize="xl"
              lineHeight="1.4em"
              marginTop="1rem"
            >
              a{' '}
              <Text
                as="span"
                style={{
                  backgroundImage:
                    'linear-gradient(to right, #FF00A8, #FF8179)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                fontSize="xl"
              >
                product designer
              </Text>{' '}
              who designs and codes accessible user experiences at rapid speeds.
            </Text>
          </Stack>
          <Text
            fontSize={['16rem', '18rem', '20rem']}
            textShadow="0 20px 20px rgba(0, 0, 0, 0.25)"
          >
            😻
          </Text>
        </Flex>
        <Heading
          textAlign="center"
          fontSize="4xl"
          letterSpacing="-0.04em"
          fontWeight="regular"
          ref={scrollWork}
        >
          check out my stuff 👇
        </Heading>
        <ProjectGrid />
      </Stack>
    </Box>
  )
}

export default App
