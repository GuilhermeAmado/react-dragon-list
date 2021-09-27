import {
  Avatar,
  Box,
  Button,
  Flex,
  useColorModeValue,
  Text,
  Badge,
} from '@chakra-ui/react';
import Link from 'next/link';
import parseDate from '../helpers/parseDate';
import { GiSeaDragon } from 'react-icons/gi';
import DropdownMenu from './DropdownMenu';

const Dragon = ({ dragon }) => {
  const { createdAt, name, type, histories, id, avatar } = dragon;
  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="space-between"
      rounded="md"
      padding="8"
      position="relative"
      bg={useColorModeValue('white', 'gray.700')}
      shadow={{ md: 'base' }}
    >
      <Box
        position="absolute"
        inset="0"
        height="20"
        bgGradient="linear(to-br, primary, brown.700)"
        roundedTop="inherit"
      />

      <Avatar
        size="2xl"
        icon={<GiSeaDragon fontSize="3.5rem" />}
        bg="yellow.200"
        src={avatar}
        borderWidth={3}
        borderColor="primary"
        boxShadow="xl"
      />
      <Text marginTop="2" textAlign="center" fontWeight="bold" fontSize="lg">
        {name}
      </Text>
      <Badge marginTop="2" backgroundColor="yellow.200">
        Type: {type}
      </Badge>
      <Link href={`/dragons/${id}`}>
        <a>
          <Button my="4">See details</Button>
        </a>
      </Link>
      <Text fontSize="10px">
        <Text as="span" fontWeight="bold">
          Created at&nbsp;
        </Text>
        {parseDate(createdAt)}
      </Text>
      <Box position="absolute" top="20px" right="20px">
        <DropdownMenu />
      </Box>
    </Flex>
  );
};

export default Dragon;
