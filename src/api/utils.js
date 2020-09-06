export function toQueryString(data) {
  if (data == null) return "";
  let params = "?";
  for (const [key, value] of Object.entries(data)) {
    params += `${encodeURIComponent(key)}=${encodeURIComponent(value)}&`;
  }
  return params;
}
