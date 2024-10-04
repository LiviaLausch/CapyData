import { Container } from "./styles";
import { PatientCard } from "../../components/PatientCard";
import { LinkButton } from "../../components/LinkButton";
import { Input } from "../../components/Input";
import { Section } from "../../components/Section";
import { ArrowBack } from "../../components/ArrowBack";
import useSWR from "swr";
import { fetcher } from "../../api/api";
import { useParams } from "react-router-dom";
import { useMemo, useState } from "react";

export function Notes() {
  const { id } = useParams();
  const { data, isLoading } = useSWR(`/patients?biologist_id=${id}`, fetcher);
  const [search, setSearch] = useState("");

  const patients = useMemo(() => {
    if (!search) {
      return data;
    }
    if (!data) {
      return [];
    }
    return data.filter((patient) => {
      const habitat = patient.habitat
        .toLowerCase()
        .includes(search.toLowerCase());
      const name = patient.name.toLowerCase().includes(search.toLowerCase());

      return habitat || name;
    });
  }, [search, data]);

  return (
    <Container>
      <ArrowBack to={`/biologist/${id}`} />
      <div id="top">
        <h1> Pacientes </h1>
        <LinkButton to={`/biologist/${id}/new`} title="Novo paciente" />
      </div>
      <Input
        placeholder="pesquisar por habitat"
        onChange={(event) => setSearch(event.target.value)}
      />
      {isLoading ? (
        <p>carregando...</p>
      ) : (
        <Section>
          {patients.map((patient) => (
            <PatientCard
              key={patient.id}
              id={patient.id}
              name={patient.name}
              habitat={patient.habitat}
            />
          ))}
        </Section>
      )}
    </Container>
  );
}
