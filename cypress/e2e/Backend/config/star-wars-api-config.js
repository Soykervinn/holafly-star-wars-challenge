export const commonRequestConfig = {
    failOnStatusCode: false
};

export const baseUrl = 'https://www.swapi.tech/api'

export const Ip = {
    BR: "200.206.31.27",
    AR: "186.152.29.156",
    CL: "173.244.55.18",
    CO: "138.121.203.146",
    EC: "173.244.55.51",
    PE: "173.244.55.98",
    UY: "173.244.55.115",
    MX: "200.56.59.146",
};

export const requestConfig = {
    SWAPI: (agentId) => ({
      ...commonRequestConfig,
      headers: {
        ...(agentId ? { 'user-agent': `Cypress agent: ${agentId}` } : {}),
      },
    }),
  };
