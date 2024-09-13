"use client";
import theme from "@/theme";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const ProviderChakra = ({ children }: { children: ReactNode }) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config?.initialColorMode} />
      {children}
    </ChakraProvider>
  );
};

export default ProviderChakra;
