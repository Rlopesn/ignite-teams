import * as s from './styles'
import {TouchableOpacityProps} from 'react-native'

type Props = TouchableOpacityProps & {
    title: string;

}

export function GroupCard({ title, ...rest }: Props) {

    return (
        <s.Container {...rest}>
            <s.Icon />
            <s.Title>
                {title}
            </s.Title>
        </s.Container>

    )
}