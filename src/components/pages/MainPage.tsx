import React from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import { getPosts } from "@/app/server/getPost";

const MainPage = () => {
  return (
    <Box>
      <Container maxW="container.xl">
        <Heading as="h1" size="2xl">
          Main Page
        </Heading>
        <Text fontSize="xl" mt={4}>
          Examples of different data fetching and mutation design patterns in
          NextJs 14
        </Text>
        <Divider my={8} />
        <Button onClick={getPosts}>Fetch Posts</Button>
      </Container>
    </Box>
  );
};

export default MainPage;
