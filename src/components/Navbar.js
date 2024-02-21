import { Text, Flex } from '@chakra-ui/react'

function Navbar() {
  return (
    <Flex
      justifyContent="space-between"
      backgroundColor="rgba(255, 255, 255, 0.5)"
      backdropFilter="blur(5px)"
      position="fixed"
      width="100%"
    >
      <Text
        fontFamily="Outfit"
        fontSize="1rem"
        padding="1rem"
        fontWeight="semibold"
      >
        patti tani
      </Text>
      <Flex>
        <Text
          fontFamily="Outfit"
          fontSize="1rem"
          padding="1rem"
          fontWeight="semibold"
        >
          work
        </Text>
        <Text
          fontFamily="Outfit"
          fontSize="1rem"
          padding="1rem"
          fontWeight="semibold"
        >
          play
        </Text>
        <Text
          fontFamily="Outfit"
          fontSize="1rem"
          padding="1rem"
          fontWeight="semibold"
        >
          about
        </Text>
        <Text
          fontFamily="Outfit"
          fontSize="1rem"
          padding="1rem"
          color="primary"
          fontWeight="semibold"
        >
          resume
        </Text>
      </Flex>
    </Flex>
  )
}

export default Navbar
