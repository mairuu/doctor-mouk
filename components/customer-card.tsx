import Image from 'next/image';
import { Text, Card, createStyles } from '@mantine/core';

const useStyles = createStyles({
  root: {
    textAlign: 'center',
    backgroundColor: 'transparent',
  },

  name: { fontSize: 32, fontWeight: 400, margin: '16px 0' },
  desc: { fontSize: 16 },

  media: {},
});

export const CustomerCard = ({
  name,
  desc,
}: {
  name: string;
  desc: string;
}) => {
  const { classes } = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.media}>
        <Image
          width={200}
          height={200}
          src='/assets/placeholder.jpeg'
          alt=''
          style={{ borderRadius: '50%' }}
        />
      </div>

      <Text className={classes.name}>{name}</Text>
      <Text className={classes.desc}>{desc}</Text>
    </Card>
  );
};
