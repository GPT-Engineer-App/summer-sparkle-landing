import { Container, Text, VStack, Box, Image, Heading } from "@chakra-ui/react";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl" textAlign="center">Sommarminglet 2024</Heading>
        <Text fontSize="lg" textAlign="center">Join us for a delightful summer evening with sparkling wine and great company!</Text>
        <Text fontSize="md" textAlign="center">Date: June 5, 2024</Text>
        <Box boxSize="md">
          <Image src="/images/summer-sparkling-wine.jpg" alt="Summer with Sparkling Wine" borderRadius="md" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;