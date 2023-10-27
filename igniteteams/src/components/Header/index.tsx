import * as s from './styles'
import logoImg from '@assets/logo.png'

type Props = {
    showBackButton?: boolean;
}

export function Header({ showBackButton = false }: Props) {
    return (
        <s.Container>
            {
                showBackButton &&
                <s.BackButton>
                    <s.BackIcon />
                </s.BackButton>
            }
            <s.Logo source={logoImg} />
        </s.Container>
    )
}