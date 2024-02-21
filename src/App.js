import { Box, Stack, Text, Flex, Button } from '@chakra-ui/react';
import Navbar from './components/Navbar';

function App() {
  return (
    <Box bg="white">
      <Stack>
        <Navbar/>
      </Stack>
    </Box>
  );
}

export default App;
