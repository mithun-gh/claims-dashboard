import { API_URL_BASE } from "./config";
import { toQueryString } from "./utils";

export const getSLAs = async (params) => await get("/slas", params);
export const getClaims = async (params) => await get("/claims", params);

async function get(url, params) {
  const response = await fetch(`${API_URL_BASE}${url}${toQueryString(params)}`);
  return await response.json();
}
