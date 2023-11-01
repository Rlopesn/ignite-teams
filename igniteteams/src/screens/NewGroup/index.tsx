import { Header } from "@components/Header"
import * as s from "./styles"
import { Highlight } from "@components/Highlight"
import { Button } from "@components/Button"
import { Input } from "@components/Input"



export function NewGroup() {

    return (
        <s.Container>
            <Header showBackButton />
            <s.Content>
                <s.Icon />
                <Highlight
                    title="Nova turma"
                    subtitle="Crie a turma para adicionar as pessoas"
                />
                <Input
                    placeholder="Nome da turma"
                />
                <Button
                    title="Criar"
                    style={{ marginTop: 20 }}
                />
            </s.Content>
        </s.Container>

    )
}