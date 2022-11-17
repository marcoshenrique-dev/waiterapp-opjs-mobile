
import { Text } from '../Text';
import { Container } from './styles';

type ButtonProps = {
  children: string;
  onPress: () => void;
  disabled?: boolean;
}

export function Button({children, onPress, disabled = false}: ButtonProps) {
  return (
    <Container disabled={disabled} onPress={onPress}>
      <Text weight='600' color='#fff'>{children}</Text>
    </Container>
  );
}
