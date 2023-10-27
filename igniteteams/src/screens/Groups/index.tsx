import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";

import * as s from "./styles";

export function Groups() {
  return (
    <s.Container >
      <Header />
      <Highlight
        title="Turmas"
        subtitle="Jogue com a sua turma"
      />
      <GroupCard title="Galera do Ignite" />
    </s.Container>
  );
}

