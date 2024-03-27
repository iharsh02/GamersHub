import {
  HStack,
  Text,
  useColorMode,
  Switch as ChakraSwitch,
} from "@chakra-ui/react";

const Switch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <HStack>
      <ChakraSwitch
        colorScheme="green"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
      <Text>Dark Mode</Text>
    </HStack>
  );
};

export default Switch;
