import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, Text } from "./styles";
import { Controller, useForm } from "react-hook-form";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";

export function SingIn() {
  const methods = useForm();
  const navigate = useNavigate();
  const { control, handleSubmit } = methods;

  async function onSubmit(form) {
    console.log(form);
    api
      .post("/session", form)
      .then(({ data }) => {
        navigate(`/biologist/${data.id}`);
      })
      .catch(({ response }) => {
        console.log(response);
        alert(response.data.error);
      });
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h1> Bem Vindo </h1>

        <h2>Faça seu login</h2>

        <Controller
          defaultValue=""
          name="email"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="E-mail" type="email" />
          )}
        />

        <Controller
          defaultValue=""
          name="password"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Senha" type="password" />
          )}
        />

        <Button type="submit" title="Entrar" />

        <Text to="/register">Criar conta</Text>
      </Form>
    </Container>
  );
}
