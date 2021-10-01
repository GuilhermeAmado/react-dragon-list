import { Menu, MenuButton, MenuList, MenuItem, Icon } from '@chakra-ui/react';
import { GiDragonSpiral, GiCrossMark, GiFountainPen } from 'react-icons/gi';
import { useMutation, UseMutationResult, useQuery } from 'react-query';

const DropdownMenu = ({ dragon }) => {
  const { refetch } = useQuery('dragonsList');

  const deleteDragon: UseMutationResult = useMutation(
    () => {
      return fetch(
        `http://5c4b2a47aa8ee500142b4887.mockapi.io/api/v1/dragon/${dragon.id}`,
        { method: 'DELETE' }
      );
    },
    { onSuccess: () => refetch() }
  );

  return (
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
        <MenuItem>
          <Icon mr="2" as={GiFountainPen} /> Edit
        </MenuItem>
        <MenuItem _hover={{ color: 'red' }} onClick={deleteDragon.mutate}>
          <Icon mr="2" as={GiCrossMark} /> Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default DropdownMenu;
