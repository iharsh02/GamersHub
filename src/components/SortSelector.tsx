import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by : Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>Sort by A-Z</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
