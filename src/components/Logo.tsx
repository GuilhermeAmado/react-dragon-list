import { Icon } from '@chakra-ui/react';
import { Flex, Heading } from '@chakra-ui/layout';
import { GiSpikedDragonHead } from 'react-icons/gi';
import { useRouter } from 'next/router';

export default function Logo() {
  const router = useRouter();
  return (
    <Heading
      as="h1"
      maxWidth="fit-content"
      onClick={() => router.push('/')}
      _hover={{ cursor: 'pointer' }}
    >
      <Flex>
        <Icon as={GiSpikedDragonHead} mr="2" />
        Dragons lair
      </Flex>
    </Heading>
  );
}
