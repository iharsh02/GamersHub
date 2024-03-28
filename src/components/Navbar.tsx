import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ToggleSwitch from "./ToggleSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ToggleSwitch />
    </HStack>
  );
};

export default Navbar;
