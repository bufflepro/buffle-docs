import "../global.css";

export default function App({ Component, pageProps }) {


    return <div style={{ margin:"0 auto"}}><Component {...pageProps} /></div>
  }