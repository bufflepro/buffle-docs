import { useRouter } from 'next/router';
import "../global.scss";
import { useEffect } from 'react';

  
export default function App({ Component, pageProps }) {

  useEffect(() => {

    document.documentElement.classList.add("dark");
  }, []);

  const router = useRouter();
  const isEmbedded = router.query.embed === 'true';

  return (
    <div style={{ margin: "0 auto" }} className={isEmbedded ? 'embed-mode' : ''}>
      <Component {...pageProps} />
    </div>
  );
}
