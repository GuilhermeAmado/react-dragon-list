import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Icon,
  useDisclosure,
} from '@chakra-ui/react';
import { GiDragonSpiral, GiCrossMark, GiFountainPen } from 'react-icons/gi';
import { useMutation, UseMutationResult, useQueryClient } from 'react-query';
import DragonModal from './DragonModal';

const DropdownMenu = ({ dragon }) => {
  const queryClient = useQueryClient();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const deleteDragon: UseMutationResult = useMutation(
    () => {
      return fetch(
        `https://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${dragon.id}`,
        { method: 'DELETE' }
      );
    },
    { onSuccess: () => queryClient.invalidateQueries('dragonsList') }
  );

  return (
    <>
      <Menu>
        <MenuButton
          transition="all 0.2s"
          _hover={{ color: 'yellow.200' }}
          _expanded={{ color: 'primary' }}
        >
          <Icon as={GiDragonSpiral} _expanded={{ color: 'black' }} />
        </MenuButton>
        <MenuList
          minWidth="min-content"
          boxShadow="dark-lg"
          border="2px"
          borderColor="primary"
        >
          <MenuItem onClick={onOpen}>
            <Icon mr="2" as={GiFountainPen} /> Edit
          </MenuItem>
          <MenuItem _hover={{ color: 'red' }} onClick={deleteDragon.mutate}>
            <Icon mr="2" as={GiCrossMark} /> Delete
          </MenuItem>
        </MenuList>
      </Menu>
      <DragonModal
        mode={'EDIT'}
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        dragon={dragon}
      />
    </>
  );
};

export default DropdownMenu;
