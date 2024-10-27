const themeConfig = {
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Buffle Pro Docs" />
      <meta property="og:description" content="Your go-to productivity tool." />
      <link rel="icon" href="/images/favicon.svg" sizes="any" />
      <title>Buffle Docs</title>
    </>
  ),
  logo: <img src="/images/logo.svg" style={{ width: "180px" }} />,

  banner: {
    key: "1",
    content: null,
  },

  color: {
    hue: 35,
  },
  backgroundColor:{
    dark:'0,0,0'
  },

  sidebar:{
    toggleButton: false,
  
  },

  footer: {
    component: null,
  },
  gitTimestamp: false,
  themeSwitch: false,
  feedback: {
    content: "Submit feeback",
    useLink: () => "mailto:support@buffle.pro",
  },
  editLink: {
    component: null,
  },
};

export default themeConfig;
