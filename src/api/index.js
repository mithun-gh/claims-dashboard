import { API_URL_BASE } from "./config";
import { toQueryString } from "./utils";

export const getSLAs = async (params) => await get("/slas", params);

export const getClaims = async (params) => {
  const claims = await get("/claims", params);

  const hoursExceedingSLA = (claim) => {
    const today = new Date();
    const updated = new Date(claim.updatedAt);
    return Math.abs(updated - today) / 3.6e6;
  };

  return claims.sort((a, b) => hoursExceedingSLA(b) - hoursExceedingSLA(a));
};

async function get(url, params) {
  const response = await fetch(`${API_URL_BASE}${url}${toQueryString(params)}`);
  return await response.json();
}
