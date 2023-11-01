import * as s from "./styles";

type Props = {
    message: String;
}

export function ListEmpty({ message }: Props) {
    return (
        <s.Container>
            <s.Message>
                {message}
            </s.Message>
        </s.Container>
    )
}