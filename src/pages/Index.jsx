import React from "react";
import { Box, Container, Heading, List, ListItem, ListIcon, Link, Text, Divider, IconButton, Flex, Spacer } from "@chakra-ui/react";
import { FaHackerNews, FaAngleUp } from "react-icons/fa";

// Mock data for Hacker News posts
const newsItems = [
  {
    id: 1,
    title: "Introducing the new MacBook Air with M2 chip",
    url: "https://apple.com/macbook-air-m2",
    points: 156,
    author: "applefan",
    time: "3 hours ago",
    commentsCount: 47,
  },
  // ... add more items as needed
];

const Index = () => {
  return (
    <Container maxW="container.md" pt={5}>
      <Flex mb={5} alignItems="center">
        <ListIcon as={FaHackerNews} color="orange.500" fontSize="3xl" />
        <Heading as="h1" size="lg" ml={2}>
          Hacker News
        </Heading>
        <Spacer />
        {/* Add more navigation items if needed */}
      </Flex>
      <List spacing={3}>
        {newsItems.map((item) => (
          <ListItem key={item.id} fontSize="sm">
            <Flex alignItems="center">
              <IconButton size="xs" aria-label={`upvote ${item.title}`} icon={<FaAngleUp />} variant="ghost" colorScheme="orange" />
              <Box>
                <Heading as="h2" size="sm" fontWeight="normal">
                  <Link href={item.url} isExternal color="blue.500">
                    {item.title}
                  </Link>
                </Heading>
                <Text color="gray.600">
                  {item.points} points by {item.author} {item.time} | {item.commentsCount} comments
                </Text>
              </Box>
            </Flex>
            <Divider my={2} />
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default Index;
