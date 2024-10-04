import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form, Text } from "./styles";
import { Controller, useForm } from "react-hook-form";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";

export function SingUp() {
  const methods = useForm();
  const navigate = useNavigate();
  const { control, handleSubmit } = methods;

  async function onSubmit(form) {
    console.log(form);
    api
      .post("/biologists", form)
      .then((res) => {
        if (res.status === 201) {
          alert("Usuário salvo com sucesso!");

          navigate("/");
        }
      })
      .catch(({ response }) => {
        console.log(response);
        alert(response.data.error);
      });
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Criar conta</h2>

        <Controller
          defaultValue=""
          name="name"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Nome completo" type="text" />
          )}
        />

        <Controller
          defaultValue=""
          name="email"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="E-mail" type="text" />
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

        <Button type="submit" title="Salvar" />

        <Text to="/">voltar para login</Text>
      </Form>
    </Container>
  );
}
