import { Box, Title } from "@mantine/core";
import { Hero } from "./Hero";
// import { CategoryCards } from "./CategoryCard";
import { FeaturedProducts } from "./FeaturedProducts";

const HomeInfoSection = () => {
  return (
    <Box mb="xl">
      <Title order={2} mb="md">
        🛍️ Store Information
      </Title>
      <Hero />

      {/* {Navigation} */}
      {/* <CategoryCards /> */}

      {/* 3. Dynamic Inventory Showcase */}
      <FeaturedProducts />
    </Box>
  );
};

export default HomeInfoSection;
