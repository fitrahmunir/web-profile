const TIMEZONE = "Asia/Jakarta";
const HOUR = 15;

console.log(
  new Date(
    new Date().toLocaleString("en-US", { timeZone: TIMEZONE })
  ).getHours() < HOUR
    ? "light"
    : "dark"
);

export const theme =
  new Date(
    new Date().toLocaleString("en-US", { timeZone: TIMEZONE })
  ).getHours() < HOUR
    ? "light"
    : "dark";
