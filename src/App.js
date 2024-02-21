import logo from './logo.svg';
import './App.css';
import { Box, Stack, Navbar, Text, Flex, Button } from '@chakra-ui/react';

function App() {
  return (
    <Box>
      <Stack>
        <Flex justifyContent="space-between">
          <Text fontFamily="Outfit" fontSize="1rem" padding="1rem">
            patti tani
          </Text>
          <Flex>
          <Text fontFamily="Outfit" fontSize="1rem" padding="1rem">
            work
          </Text>
          <Text fontFamily="Outfit" fontSize="1rem" padding="1rem">
            play
          </Text>
          <Text fontFamily="Outfit" fontSize="1rem" padding="1rem">
            about
          </Text>
          <Text fontFamily="Outfit" fontSize="1rem" padding="1rem">
            resume
          </Text>
          </Flex>


        </Flex>
      </Stack>
    </Box>
  );
}

export default App;
