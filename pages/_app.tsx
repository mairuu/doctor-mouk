import { AppProps } from 'next/app';
import Head from 'next/head';
import { MantineProvider, Global } from '@mantine/core';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>หมอหมึก</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
        <link rel='shortcut icon' href='/favicon.svg' />
      </Head>

      <MantineProvider
        theme={{ colorScheme: 'dark', fontFamily: 'IBM Plex Sans' }}
        withGlobalStyles
        withNormalizeCSS
      >
        <Component {...pageProps} />
        <Global
          styles={(theme) => ({
            body: {
              backgroundImage: theme.fn.linearGradient(
                180,
                theme.fn.darken(theme.colors.grape[8], 0.1),
                `${theme.fn.darken(theme.colors.indigo[8], 0.5)} 75%`
              ),
            },

            '@font-face': {
              fontFamily: 'FC Neo Classic',
              src: 'url("/fonts/FCNeoClassic.ttf") format("truetype")',
            },
          })}
        />
      </MantineProvider>
    </>
  );
}
