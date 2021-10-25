const _matrix = [
  [1, 2, 3, 2, 7],
  [4, 5, 6, 8, 1],
  [7, 8, 9, 4, 5],
];
function arrTest(matrix) {
  const result = [];

  for (let i = 0; i < matrix[0].length - 2; i++) {
    const plot = [].concat(
      matrix[0].slice(i, i + 3),
      matrix[1].slice(i, i + 3),
      matrix[2].slice(i, i + 3)
    );

    const plotSet = new Set(plot);
    result.push(plotSet.size === 9);
  }

  return result;
}

console.log(arrTest(_matrix));
