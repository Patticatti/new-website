import { Text, Link, Flex } from '@chakra-ui/react'
import { LuMenu } from 'react-icons/lu'

function Navbar({ scrollToRef }) {
  return (
    <Flex
      justifyContent="space-between"
      backgroundColor="rgba(255, 255, 255, 0.5)"
      backdropFilter="blur(5px)"
      position="fixed"
      width="100%"
      zIndex="100"
    >
      <Text
        fontFamily="Outfit"
        fontSize="1rem"
        padding="1rem"
        fontWeight="semibold"
        marginLeft="1rem"
        onClick={() => scrollToRef(0)}
      >
        patti tani
      </Text>
      <Flex marginRight="1rem">
        <Link
          fontFamily="Outfit"
          fontSize="1rem"
          padding="1rem"
          fontWeight="semibold"
          color="black"
          _hover={{
            color: '#FF00A8',
            // textShadow: '0 0px 8px rgba(255, 0, 168, 0.4)',
          }}
          onClick={() => scrollToRef(1)}
          display={['none', 'none', 'flex']}
          cursor="pointer"
        >
          work
        </Link>
        <Text
          fontFamily="Outfit"
          fontSize="1rem"
          padding="1rem"
          fontWeight="semibold"
          _hover={{
            color: '#FF00A8',
            // textShadow: '0 0px 8px rgba(255, 0, 168, 0.4)',
          }}
          display={['none', 'none', 'flex']}
          cursor="pointer"
        >
          play
        </Text>
        <Text
          fontFamily="Outfit"
          fontSize="1rem"
          padding="1rem"
          fontWeight="semibold"
          _hover={{
            color: '#FF00A8',
            // textShadow: '0 0px 8px rgba(255, 0, 168, 0.4)',
          }}
          onClick={() => scrollToRef(2)}
          display={['none', 'none', 'flex']}
          cursor="pointer"
        >
          about
        </Text>
        <Text
          fontFamily="Outfit"
          fontSize="1rem"
          padding="1rem"
          color="primary"
          fontWeight="semibold"
          _hover={{
            color: '#FF00A8',
            // textShadow: '0 0px 8px rgba(255, 0, 168, 0.4)',
          }}
          display={['none', 'none', 'flex']}
          cursor="pointer"
        >
          resume
        </Text>
        <Flex display={['flex', 'flex', 'none']} alignItems="center">
          <LuMenu color="black" style={{ width: '32px', height: '32px' }} />
        </Flex>
      </Flex>
    </Flex>
  )
}

export default Navbar
