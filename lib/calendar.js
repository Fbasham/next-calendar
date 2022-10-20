export function dateToMonthArray(date) {
  let d = new Date(date.getFullYear(), date.getMonth(), 1);
  let res = Array(d.getDay()).fill(null);
  let nextMonth = (date.getMonth() + 1) % 12;
  while (d.getMonth() != nextMonth) {
    res.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  return res;
}
