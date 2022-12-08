export function addZero(num: number): string {
  if (num >= 0 && num <= 9) {
    return '0' + num;
  } else {
    return num.toString();
  }
}
