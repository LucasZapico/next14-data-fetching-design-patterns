import { loadEnvConfig } from "@next/env";
import { projectDir } from "../../next.config.mjs";

loadEnvConfig(projectDir);

const defaultEnv = () => {
  return {
    NODE_ENV: process.env.NODE_ENV || "development",
    PORT: process.env.PORT || 3344,
  };
};

export default defaultEnv;
