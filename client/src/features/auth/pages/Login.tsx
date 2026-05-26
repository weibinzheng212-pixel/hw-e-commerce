import {
  Anchor,
  Button,
  Card,
  Container,
  PasswordInput,
  Space,
  Text,
  TextInput,
  Title,
} from "@mantine/core";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
  };

  return (
    <Container size="xs" py="xl">
      <Card shadow="md" padding="xl" radius="md" withBorder>
        <Title order={2} mb="md" ta="center">
          Login
        </Title>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Username"
            placeholder="emilys"
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

          <Anchor
            href="#"
            onClick={(event) => event.preventDefault()}
            pt={2}
            fw={500}
            fz="xs"
          >
            Forgot your password?
          </Anchor>
          <br />
          <Button fullWidth onClick={() => navigate("/products")}>login</Button>
          <Text size="sm" c="dimmed" ta="center">
            Try emilys / emilyspass
          </Text>
          <div style={{ display: "flex" }}>
            <Text size="sm" ta="center">
              {" "}
              Don't have an account?
            </Text>
            <Space w="md" />
          <button onClick={() => navigate("/signup")}>sign up </button>
          </div>


        </form>
      </Card>
    </Container>
  );
};

export default Login;
