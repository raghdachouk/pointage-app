export const timeDifference = (t1, t2) => {
  const diff = t2 - t1;
  const SEC = 1000;
  const MIN = 60 * SEC;
  const HRS = 60 * MIN;
  const DAYS = 24 * HRS;

  const days = Math.floor(diff / DAYS);
  const hours = Math.floor((diff % DAYS) / HRS);
  const minutes = Math.floor((diff % HRS) / MIN);
  const seconds = Math.floor((diff % MIN) / SEC);

  return `${days}dd:${hours}hh:${minutes}mm:${seconds}ss`;
};
