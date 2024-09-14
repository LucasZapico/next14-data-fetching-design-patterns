"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Divider,
  Heading,
  Text,
} from "@chakra-ui/react";
import { getPosts } from "@/app/server/getPost";
import { logInfo } from "@/utils/cliLogger";

const MainPage = () => {
  const [posts, setPosts] = useState([]);

  const handleClick = async () => {
    const data = await getPosts();
    setPosts(data);
  };
  useEffect(() => {
    logInfo("data from server action getPosts", { posts });
  }, [posts]);

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
        <Button onClick={handleClick}>Fetch Posts</Button>
        <Box mt={4}>
          {posts.length > 1 &&
            posts.map((post) => (
              <Box key={post.id} p={4} borderWidth="1px" borderRadius="lg">
                <Heading as="h2" size="lg">
                  {post.title}
                </Heading>
                <Text mt={4}>{post.body}</Text>
              </Box>
            ))}
        </Box>
      </Container>
    </Box>
  );
};

export default MainPage;
