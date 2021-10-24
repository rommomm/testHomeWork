function resultArr() {
  const arr = [1, 3, 5, 4, 5, 7];
  const result = [];

  for (let i = 1; i < arr.length - 1; i++) {
    const left = arr[i - 1];
    const center = arr[i];
    const right = arr[i + 1];

    if (
      (left > center && center < right) ||
      (left < center && center > right)
    ) {
      result.push(1);
    } else {
      result.push(0);
    }
  }

  return result;
}

console.log(resultArr());
