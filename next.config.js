const { PHASE_DEVELOPMENT_SERVER, PHASE_TEST } = require("next/constants");

const nextConfig = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        MONGODB_PASSWORD: "fpq6RpXiEtPwOLP2",
        MONGODB_USER: "imrannoor1992",
        MONGODB_CLUSTERNAME: "cluster0",
        MONGODB_DATABASE: "my-site-dev",
      },
    };
  }
  return {
    env: {
      MONGODB_PASSWORD: "fpq6RpXiEtPwOLP2",
      MONGODB_USER: "imrannoor1992",
      MONGODB_CLUSTERNAME: "cluster0",
      MONGODB_DATABASE: "my-site",
    },
  };
};

module.exports = nextConfig;
