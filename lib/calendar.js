export function dateToMonthArray(date) {
  let d = new Date(date.getFullYear(), date.getMonth(), 1);
  let res = Array(d.getDay()).fill(null);
  while (d.getMonth() < date.getMonth() + 1) {
    res.push(new Date(d));
    d.setDate(d.getDate() + 1);
  }
  return res;
}
