function solveNQueens(n) {
  const result = [];

  function isSafe(row, col, queens) {
    for (let i = 0; i < row; i++) {
      if (
        queens[i] === col || // Check if there is a queen in the same column
        Math.abs(i - row) === Math.abs(queens[i] - col)
        // Check if there is a queen in the same diagonal
      ) {
        return false;
      }
    }
    return true;
  }

  function placeQueens(row, queens) {
    if (row === n) {
      result.push(
        queens.map((col) => ".".repeat(col) + "Q" + ".".repeat(n - col - 1))
      );
      return;
    }

    for (let col = 0; col < n; col++) {
      if (isSafe(row, col, queens)) {
        queens.push(col);
        placeQueens(row + 1, queens);
        queens.pop();
      }
    }
  }

  placeQueens(0, []);

  return result;
}

// Example usage:
const n = 4;
const solutions = solveNQueens(n);
console.log(`All solutions for ${n}-Queens problem:`, solutions);
