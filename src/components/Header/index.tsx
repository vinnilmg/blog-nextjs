import Link from 'next/link';
import { SITE_NAME } from '../../config/app-config';
import { Container } from './styles';

export const Header = () => {
  return (
    <Container>
      <Link href="/">
        <a>{SITE_NAME}</a>
      </Link>
    </Container>
  );
};
