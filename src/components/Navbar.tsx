import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ToggleSwitch from "./ToggleSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="60px" />
      <ToggleSwitch />
    </HStack>
  );
};

export default Navbar;
