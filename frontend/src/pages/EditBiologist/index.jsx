import { Controller, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Container, Form, Text } from "./styles";
import useSWR from "swr";
import { api, fetcher } from "../../api/api";
import { useEffect } from "react";

export function EditBiologist() {
  const methods = useForm();
  const navigate = useNavigate();
  const { control, handleSubmit, reset } = methods;
  const { id } = useParams();
  const { data } = useSWR(`/biologists/${id}`, fetcher);

  useEffect(() => {
    if (!data) {
      return;
    }
    reset(data);
  }, [data]);

  async function onSubmit(form) {
    console.log(form);
    api
      .put(`/biologists/${id}`, form)
      .then(() => {
        alert("Cadastro atualizado com sucesso!");
        navigate(`/biologist/${id}`);
      })
      .catch(({ response }) => {
        console.log(response);
        alert(response.data.error);
      });
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <h2>Editar perfil</h2>

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
          name="oldPassword"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Senha atual" type="password" />
          )}
        />

        <Controller
          defaultValue=""
          name="password"
          control={control}
          render={({ field }) => (
            <Input {...field} placeholder="Nova senha" type="password" />
          )}
        />

        <Button type="submit" title="Salvar alterações" />

        <Text to={`/biologist/${id}`}>voltar</Text>
      </Form>
    </Container>
  );
}
