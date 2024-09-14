import React from "react";
import { Box, Container, Heading, Text } from "@chakra-ui/react";

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
      </Container>
    </Box>
  );
};

export default MainPage;
