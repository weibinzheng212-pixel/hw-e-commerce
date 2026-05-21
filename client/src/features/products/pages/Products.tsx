import {
  Container,
  Text,
  Title,
  Box,
  Card,
  Image,
  Group,
  Badge,
  Button,
  Flex,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../../../components/ui/Spinner";
import type { ProductResponse } from "../type";
import { fetchCategories, fetchProducts } from "../api";

const useCategory = () => {
  return useQuery({
    queryKey: ["category"],
    queryFn: fetchCategories,
  });
};

const Products = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["product"],
    queryFn: fetchProducts,
  });

  if (isLoading) {
    return <Spinner />;
  }

  if (isError) {
    return <Text>{error.message}</Text>;
  }

  console.log(data?.products);

  return (
    <Container size="xl" py="xl">
      <Title order={1} mb="xl"></Title>
      <Text size="lg">Products page - add your products here test</Text>
      <Flex wrap="wrap" gap="md">
        {data?.products.map((products) => {
          const { id, title, price, rating, stock, images, description } =
            products;
          return (
            <Card key={id} shadow="sm" padding="xl" withBorder w={250}>
              <Card.Section>
                <Image src={images} height={160} alt={title} />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{title}</Text>
                <Badge color="pink">{price}</Badge>
              </Group>

              <Text size="sm" c="dimmed">
                {description}
              </Text>

              <Button color="blue" fullWidth mt="md">
                view details
              </Button>
            </Card>
          );
        })}
      </Flex>
    </Container>
  );
};

export default Products;
function reject(arg0: string) {
  throw new Error("Function not implemented.");
}
