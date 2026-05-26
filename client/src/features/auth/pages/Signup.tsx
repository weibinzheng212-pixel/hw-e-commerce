import { Button, Card, Container, PasswordInput, TextInput, Title } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();

  return (
    <Container size="xs" py="xl">
      <Card shadow="md" padding="xl" radius="md" withBorder>
        <Title order={2} mb="md" ta="center">
          Create an account
        </Title>

        <TextInput
          label="First name"
          placeholder="Jane"
          required
          mt="md"
          autoComplete="nope"
        />
        <TextInput
          label="Last name"
          placeholder="Doe"
          required
          mt="md"
          autoComplete="nope"
        />
        <TextInput
          label="Username"
          placeholder="janedoe"
          required
          mt="md"
          autoComplete="nope"
        />
         <TextInput
          label="Email"
          placeholder="jane@example.com"
          required
          mt="md"
          autoComplete="nope"
        />

        <PasswordInput
            label="Password"
            placeholder="Enter password"
            required
            mt="md"
            autoComplete="nope"
          />

           <Button variant="outline" fullWidth mt="md" onClick={() => navigate("/signup")}> 
            Sign up
        </Button>


      </Card>
    </Container>
  );
};

export default Signup;
