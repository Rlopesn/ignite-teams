import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import * as s from "./styles";

export function Groups() {
  return (
    <s.Container >
      <Header />
      <Highlight
        title="Turmas"
        subtitle="Jogue com a sua turma"
      />
    </s.Container>
  );
}

