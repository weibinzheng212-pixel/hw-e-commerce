import { Button, Container, Flex, Space, TextInput, Title } from "@mantine/core";

const Settings = () => {
  return (
    <Container size="md" py="xl">
      <Title order={1} mb="xl">
        Settings
      </Title>

      <form>
        <div style={{ display: "flex" }}>
          <TextInput
            label="First name"
            placeholder="first name "
            required
            mt="md"
            autoComplete="nope"
          />
          <Space w="md" />
          <TextInput
            label="last name "
            placeholder="last name"
            required
            mt="md"
            autoComplete="nope"
          />
        </div>

        <div style={{ display: "flex" }}>
          <TextInput
            label="Username"
            placeholder="jane@example.com"
            required
            mt="md"
            autoComplete="nope"
          />
          <Space w="md" />

          <TextInput
            label="Email"
            placeholder="email"
            required
            mt="md"
            autoComplete="nope"
          />
        </div>
          <TextInput label="phone" placeholder="phone number" required mt="md" autoComplete="nope" />
          <br />

          <Button>Save changes</Button>
      </form>
    </Container>
  );
};

export default Settings;
