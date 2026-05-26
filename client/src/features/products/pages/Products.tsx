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
  Space,
} from "@mantine/core";
import { useQuery } from "@tanstack/react-query";
import { Spinner } from "../../../components/ui/Spinner";
import type { ProductResponse } from "../../../types/type";
import { fetchCategories, fetchProducts } from "../api";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

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
      <Text size="lg">Products page</Text>
      <Flex wrap="wrap" gap="md">
        {data?.products.map((products) => {
          const {
            id,
            title,
            price,
            rating,
            stock,
            images,
            thumbnail,
            description,
          } = products;
          return (
            <Card key={id} shadow="sm" padding="xl" withBorder w={250}>
              <Card.Section>
                <Image src={thumbnail} height={160} alt={title} />
              </Card.Section>

              <Group justify="space-between" mt="md" mb="xs">
                <Text fw={500}>{title}</Text>
                <Badge color="pink">${price}</Badge>
              </Group>

              <Text size="sm" c="dimmed">
                {description}
              </Text>

              <div style={{ display: "flex" }}>
                <Text size="sm"> Stock: {stock}</Text>
                <Space w="md" />

                <Text size="sm">Rating: {rating}</Text>
              </div>

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
