export const API_URL_BASE =
  process.env.NODE_ENV === "development"
    ? "http://localhost:2000"
    : "https://my-json-server.typicode.com/mithuniverse/claims-dashboard";
