export function format(dateStr) {
  const date = new Date(dateStr);
  const options = { year: "2-digit", month: "2-digit", day: "2-digit" };
  const parts = Intl.DateTimeFormat("en", options).formatToParts(date);
  const [{ value: month }, , { value: day }, , { value: year }] = parts;
  return `${day}-${month}-${year}`;
}
