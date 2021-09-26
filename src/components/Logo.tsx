import { Icon } from '@chakra-ui/react';
import { Flex, Heading } from '@chakra-ui/layout';
import { GiSpikedDragonHead } from 'react-icons/gi';

export default function Logo() {
  return (
    <Heading as="h1" maxWidth="fit-content">
      <Flex>
        <Icon as={GiSpikedDragonHead} mr="2" />
        Dragons lair
      </Flex>
    </Heading>
  );
}
