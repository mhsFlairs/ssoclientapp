export const msalConfig = {
  auth: {
    clientId: "0c98c7de-0beb-4dc6-b275-00448adf84dc",
    authority:
      "https://login.microsoftonline.com/54d854f5-b948-4b9f-8c42-ad811cd1e055", // This is a URL (e.g. https://login.microsoftonline.com/{your tenant ID})
    redirectUri: "https://localhost:3000/",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
};

export const API_BASE_URL = "https://localhost:7178";

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: [
    "openid",
    "api://9f95a8cb-1afa-489d-bd0a-a63c18160d17/access_as_user",
  ],
};
