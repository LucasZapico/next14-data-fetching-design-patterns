"use server";
import { logInfo } from "@/utils/cliLogger";

export const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  logInfo("data from server action getPosts", { data });
  return data;
};
