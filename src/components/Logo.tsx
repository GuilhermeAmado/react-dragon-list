import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { GiSpikedDragonHead } from 'react-icons/gi';

export default function Logo() {
  return (
    <Heading as="h1" maxWidth="fit-content">
      <Flex>
        <Box as="span" mr="2">
          <GiSpikedDragonHead />
        </Box>
        Dragons lair
      </Flex>
    </Heading>
  );
}
