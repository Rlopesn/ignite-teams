import * as s from "./styles";
import { useTheme } from "styled-components/native"
import { TextInputProps } from "react-native";


export function Input({ ...rest }: TextInputProps) {
    const theme = useTheme()
    return (
        <s.Container
            placeholderTextColor={theme.COLORS.GRAY_300}
            {...rest}
        />
    )
}