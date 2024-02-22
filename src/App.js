import { Box, Stack, Text, Heading, Flex, Link } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import ProjectGrid from './components/ProjectGrid'
import { motion } from 'framer-motion'
import { useRef } from 'react'

function App() {
  const scrollWork = useRef(null)
  const scrollToWork = () => {
    scrollWork.current?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollAbout = useRef(null)
  const scrollToAbout = () => {
    scrollAbout.current?.scrollIntoView({ behavior: 'smooth' })
  }
  const scrollTop = useRef(null)
  const scrollToTop = () => {
    scrollTop.current?.scrollIntoView({ behavior: 'smooth' })
  }
  return (
    <Box bg="white">
      <Stack alignItems="center">
        <Navbar
          scrollToWork={scrollToWork}
          scrollToAbout={scrollToAbout}
          scrollToTop={scrollToTop}
        />
        <Flex
          direction={['column-reverse', 'column-reverse', 'row']}
          justifyContent="space-between"
          alignItems="center"
          paddingBlock="5rem"
          maxWidth="1000px"
          justifySelf="center"
          ref={scrollTop}
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
          <motion.div
            animate={{ y: [0, -10, 0] }} // Animate the y position up and down
            transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }} // Set animation options
          >
            <Text
              fontSize={['16rem', '18rem', '20rem']}
              textShadow="0 20px 20px rgba(0, 0, 0, 0.25)"
            >
              😻
            </Text>
          </motion.div>
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
        <Stack marginBlock={['12rem', '12rem', '16rem']} gap="0">
          <Text color="base.500">im a firm believer that...</Text>
          <Heading fontSize="6xl" ref={scrollAbout}>
            you can learn{' '}
            <Heading
              as="span"
              fontSize="6xl"
              transition="scale "
              style={{
                backgroundImage: 'linear-gradient(to right, #FF00A8, #FFB321)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              anything ✨
            </Heading>
          </Heading>
          <Text color="base.500" textAlign="end" marginTop="1rem">
            if you just try.
          </Text>
        </Stack>
        <Stack>
          <Text>
            made by me in react.js :D{' '}
            <Link
              color="primary"
              src="https://github.com/Patticatti/new-website"
            >
              check out the repo
            </Link>
          </Text>
        </Stack>
      </Stack>
    </Box>
  )
}

export default App
