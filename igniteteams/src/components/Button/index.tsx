import * as s from "./styles";
import { TouchableOpacityProps } from "react-native"

type Props = TouchableOpacityProps & {
    title: string;
    type?: s.ButtonTypeStyleProps;
}

export function Button({ title, type = "PRIMARY", ...rest }: Props) {
    return (
        <s.Container
            type={type}
            {...rest}
            >
            <s.Title>
                {title}
            </s.Title>
        </s.Container>
    )

}