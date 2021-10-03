import {
  Avatar,
  Box,
  Button,
  Flex,
  useColorModeValue,
  Text,
  Badge,
  Heading,
} from '@chakra-ui/react';
import Link from 'next/link';
import parseDate from '../helpers/parseDate';
import { GiSeaDragon } from 'react-icons/gi';
import DropdownMenu from './DropdownMenu';
import truncateString from '../helpers/truncateString';

export interface MagicDragon {
  createdAt: string;
  name: string;
  type: string;
  histories?: string[];
  id: string;
  avatar: string;
}

const DragonCard = ({ dragon }) => {
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
      <Heading marginTop="2" textAlign="center" fontWeight="bold" fontSize="lg">
        {name}
      </Heading>
      <Badge marginTop="2" backgroundColor="yellow.200">
        Type: {truncateString(type, 15)}
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
        <DropdownMenu dragon={dragon} />
      </Box>
    </Flex>
  );
};

export default DragonCard;
