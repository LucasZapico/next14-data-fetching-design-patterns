import React, { ReactNode } from "react";
import ProviderChakra from "./ProviderChakra";

const Providers = ({ children }: { children: ReactNode }) => {
  return <ProviderChakra>{children}</ProviderChakra>;
};

export default Providers;
