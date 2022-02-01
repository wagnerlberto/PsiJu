export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  return getLayout(
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

function GlobalStyle() {
  return (
    <style global jsx>{`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      list-style: none;
    }
    body {
      margin: 0;
      font-size: 24px;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica,
        Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    }
    /* App fit Height */ 
    html, body, #__next {
      min-height: 100vh;
      display: flex;
      flex: 1;
    }
    #__next {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      // flex: 1;
    }
    #__next > * {
      flex: 1;
    }
    
    /* ./App fit Height */ 
  `}</style>
  );
}
