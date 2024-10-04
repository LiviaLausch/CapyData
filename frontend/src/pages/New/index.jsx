import { Controller, FormProvider, useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { api, fetcher } from "../../api/api";
import { ArrowBack } from "../../components/ArrowBack";
import { Button } from "../../components/Button";
import { InputForm } from "../../components/InputForm";
import { InputIcon } from "../../components/InputIcon";
import { InputRadio } from "../../components/InputRadio";
import { Select } from "../../components/Select";
import { Textarea } from "../../components/Textarea";
import { Container, Form } from "./styles";
import { useEffect } from "react";
import useSWR from "swr";

export function New() {
  const methods = useForm();
  const { id, patientId } = useParams();
  const { data } = useSWR(
    patientId ? `/patients/${patientId}?biologist_id=${id}` : null,
    fetcher
  );
  const navigate = useNavigate();
  const { control, handleSubmit, reset } = methods;

  useEffect(() => {
    if (!data) {
      return;
    }
    reset(data);
  }, [patientId, data]);

  async function onSubmit(form) {
    if (form.id) {
      api
        .put(`/patients/${form.id}`, form)
        .then((res) => {
          if (res.status === 200) {
            alert("Paciente atualizado com sucesso!!");

            navigate(`/biologist/${id}/patients/${id}`);
          }
        })
        .catch(({ response }) => {
          console.log(response);
          alert(response.data.error);
        });
      return;
    }
    form.biologist_id = id;
    api
      .post("/patients", form)
      .then((res) => {
        if (res.status === 201) {
          alert("Paciente salvo com sucesso!");

          navigate(`/biologist/${id}/patients`);
        }
      })
      .catch(({ response }) => {
        console.log(response);
        alert(response.data.error);
      });
  }

  return (
    <Container>
      <FormProvider {...methods}>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <ArrowBack to={`/biologist/${id}/patients`} />

          <h1>Novo paciente</h1>
          <fieldset>
            <legend>Adicione as informações solicitadas</legend>
            <div className="input-wrapper">
              <Controller
                defaultValue=""
                name="name"
                control={control}
                render={({ field }) => (
                  <InputForm {...field} title="Nome" type="text" />
                )}
              />
              <Controller
                defaultValue=""
                name="avatar"
                control={control}
                render={({ field }) => (
                  <InputIcon {...field} title="Imagem de perfil" type="file" />
                )}
              />
            </div>
            <div className="input-wrapper">
              <Controller
                defaultValue=""
                name="age"
                control={control}
                render={({ field }) => (
                  <InputForm {...field} title="Idade" type="number" />
                )}
              />
              <Controller
                defaultValue=""
                name="weight"
                control={control}
                render={({ field }) => (
                  <InputForm {...field} title="Peso" type="number" />
                )}
              />
              <p>kg</p>
            </div>
            <InputRadio title="Habitat:" />

            <Controller
              defaultValue=""
              name="status"
              control={control}
              render={({ field }) => <Select {...field} />}
            />

            <Controller
              defaultValue=""
              name="behavior"
              control={control}
              render={({ field }) => (
                <Textarea {...field} placeholder="Comportamento:" />
              )}
            />

            <Controller
              defaultValue=""
              name="diet"
              control={control}
              render={({ field }) => (
                <Textarea {...field} placeholder="Dieta:" required />
              )}
            />

            <Controller
              defaultValue=""
              name="observation"
              control={control}
              render={({ field }) => (
                <Textarea {...field} placeholder="Observações:" />
              )}
            />

            <div className="button-save">
              <Button type="submit" title="Salvar" />
            </div>
          </fieldset>
        </Form>
      </FormProvider>
    </Container>
  );
}
