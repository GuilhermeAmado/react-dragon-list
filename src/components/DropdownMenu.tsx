import { Menu, MenuButton, MenuList, MenuItem, Icon } from '@chakra-ui/react';
import { GiDragonSpiral, GiCrossMark, GiFountainPen } from 'react-icons/gi';

const DropdownMenu = () => {
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
        <MenuItem _hover={{ color: 'red' }}>
          <Icon mr="2" as={GiCrossMark} /> Delete
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default DropdownMenu;
