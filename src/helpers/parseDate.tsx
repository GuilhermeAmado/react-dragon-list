export default function parseDate(s) {
  const createdAt = new Date(s);
  return createdAt.toUTCString().slice(0, 25);
}
