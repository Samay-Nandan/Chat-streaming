import { ChakraProvider, theme } from "@chakra-ui/react";
import { Chat } from "@src/pages";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Chat />
  </ChakraProvider>
);
