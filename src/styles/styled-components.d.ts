// Declaration File

import { theme } from './theme';

type Theme = typeof theme;

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends Theme {} // Unindo interface do styled-components com a minha própria
}
