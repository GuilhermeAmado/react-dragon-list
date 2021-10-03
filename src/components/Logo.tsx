import { Icon, HeadingProps } from '@chakra-ui/react';
import { Flex, Heading } from '@chakra-ui/layout';
import { GiSpikedDragonHead } from 'react-icons/gi';

export default function Logo(props: HeadingProps) {
  return (
    <Heading
      as="h1"
      maxWidth="fit-content"
      userSelect="none"
      _hover={{ cursor: 'pointer' }}
      {...props}
    >
      <Flex>
        <Icon as={GiSpikedDragonHead} mr="2" />
        Dragons lair
      </Flex>
    </Heading>
  );
}
