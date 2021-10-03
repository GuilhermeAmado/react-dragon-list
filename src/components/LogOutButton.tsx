import { useContext } from 'react';
import { Button, Icon } from '@chakra-ui/react';
import { GiExitDoor } from 'react-icons/gi';
import { AuthContext } from '../contexts/AuthContext';

const LogOutButton = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <>
      <Button
        bg="brown.700"
        color="yellow.100"
        title="Log Out"
        _hover={{ backgroundColor: 'brown.900', color: 'yellow.200' }}
        _active={{ backgroundColor: 'brown.700' }}
        onClick={signOut}
      >
        <Icon as={GiExitDoor} mr="2" w={6} h={6} />
      </Button>
    </>
  );
};

export default LogOutButton;
