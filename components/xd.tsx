import { Text, Container } from '@mantine/core';

export const Xd = () => {
  return (
    <Container
      sx={{
        display: 'grid',
        placeItems: 'center',
        height: 'calc(100vh - 60px)',
        textAlign: 'center',
        color: '#eee',
      }}
    >
      <div style={{ marginBottom: '24%' }}>
        <Text sx={{ fontSize: 'clamp(2rem, 1rem + 10vw, 7.25rem)' }}>
          (´• ω •`)ﾉ
        </Text>
        <Text>หวัดดี ตัวเอง...</Text>
      </div>
    </Container>
  );
};
