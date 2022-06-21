import { AppShell } from '@mantine/core';

import { AppHeader } from './header';

const links = [
  {
    label: 'เกี่ยวกับหมอหมึก',
    link: '/about',
  },
  {
    label: 'บทความ',
    link: '/articles',
  },
  {
    label: 'จองคิว',
    link: '/appointment',
  },
];

export const AppLayout = ({ children }: { children: React.ReactNode }) => (
  <AppShell fixed padding={0} header={<AppHeader links={links} />}>
    {children}
  </AppShell>
);
