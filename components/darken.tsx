import { createStyles } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  root: { backgroundColor: theme.colors.dark[8] },
}));

export const Darken = ({ children }: { children: React.ReactNode }) => {
  const { classes } = useStyles();
  return <div className={classes.root}>{children}</div>;
};
