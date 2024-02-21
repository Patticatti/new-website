import { Box, Stack, Text, Heading, Flex} from '@chakra-ui/react';
import Navbar from './components/Navbar';
import ProjectGrid from './components/ProjectGrid';

function App() {
  return (
    <Box bg="white">
      <Stack>
        <Navbar/>
        <Flex direction={["column-reverse","column-reverse","row"]}justifyContent="center" alignItems="center" paddingBlock="5rem" gap="8%">
          <Stack maxW={["85%","85%","35%"]} textAlign={["center","center", "left"]}>
            <Text fontSize="xl">hello,</Text>
            <Heading fontSize={["6xl","6xl","8xl"]} letterSpacing="-0.03em">im patti.</Heading>
            <Text color="black" fontSize="xl" lineHeight="1.4em">
              a <Text
                as="span"
                style={{
                  backgroundImage: 'linear-gradient(to right, #FF00A8, #FF8179)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
                fontSize="xl"
              >
                product designer
              </Text> who designs and codes accessible user experiences.
            </Text>
          </Stack>
          <Text fontSize={["18rem","18rem","20rem"]} textShadow="0 20px 20px rgba(0, 0, 0, 0.25)">
          😻
          </Text>
        </Flex>
        <Heading textAlign="center" fontSize="4xl" letterSpacing="-0.04em" fontWeight="regular">check out my stuff 👇</Heading>
        <ProjectGrid/>
      </Stack>
    </Box>
  );
}

export default App;
