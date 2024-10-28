import { useRouter } from 'next/router';
import "../global.scss";

export default function App({ Component, pageProps }) {
  const router = useRouter();
  const isEmbedded = router.query.embed === 'true';

  return (
    <div style={{ margin: "0 auto" }} className={isEmbedded ? 'embed-mode' : ''}>
      <Component {...pageProps} />
    </div>
  );
}
