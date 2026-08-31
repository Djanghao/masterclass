# Precompute Distances + BitMask DP + MiniMax Algo

**Author:** Asyncy99
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-moves-to-kill-all-pawns/solutions/6071747/](https://leetcode.com/problems/maximum-number-of-moves-to-kill-all-pawns/solutions/6071747/)

---

```javascript []
const KNIGHT_MOVES = [
  [-2, -1], [-2, 1], [-1, -2], [-1, 2],
  [1, -2], [1, 2], [2, -1], [2, 1]
];

/**
 * @param {number} kx - Knight's initial x position
 * @param {number} ky - Knight's initial y position
 * @param {number[][]} positions - Array of pawn positions
 * @return {number} Maximum moves Alice can achieve
 */
const maxMoves = (kx, ky, positions) => {
  const n = positions.length;
  const distances = Array.from({ length: n + 1 }, () => Array(n + 1).fill(0));
  const memo = Array.from({ length: n + 1 }, () => Array(1 << n).fill(null));

  // Precompute distances between all positions
  for (let i = 0; i < n; i++) {
    distances[n][i] = calculateMoves(kx, ky, positions[i][0], positions[i][1]);
    for (let j = i + 1; j < n; j++) {
      const dist = calculateMoves(
        positions[i][0], positions[i][1],
        positions[j][0], positions[j][1]
      );
      distances[i][j] = distances[j][i] = dist;
    }
  }

  return minimax(n, (1 << n) - 1, true, distances, memo);
};

/**
 * Minimax function to calculate optimal moves
 * @param {number} lastPos
 * @param {number} remainingPawns
 * @param {boolean} isAlice
 * @param {number[][]} distances
 * @param {Array<Array<null|number>>} memo
 * @return {number}
 */
const minimax = (lastPos, remainingPawns, isAlice, distances, memo) => {
  if (remainingPawns === 0) return 0;
  if (memo[lastPos][remainingPawns] !== null) return memo[lastPos][remainingPawns];

  const n = distances.length - 1;
  let result = isAlice ? 0 : Infinity;

  for (let i = 0; i < n; i++) {
    if ((remainingPawns & (1 << i)) !== 0) {
      const newRemainingPawns = remainingPawns & ~(1 << i);
      const moveValue = distances[lastPos][i] + minimax(i, newRemainingPawns, !isAlice, distances, memo);

      result = isAlice ? Math.max(result, moveValue) : Math.min(result, moveValue);
    }
  }

  memo[lastPos][remainingPawns] = result;
  return result;
};

/**
 * Calculate the minimum moves for the knight to reach a target position using BFS
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {number}
 */
const calculateMoves = (x1, y1, x2, y2) => {
  if (x1 === x2 && y1 === y2) return 0;

  const visited = Array.from({ length: 50 }, () => Array(50).fill(false));
  const queue = [[x1, y1, 0]];
  visited[x1][y1] = true;

  while (queue.length > 0) {
    const [x, y, moves] = queue.shift();

    for (const [dx, dy] of KNIGHT_MOVES) {
      const nx = x + dx, ny = y + dy;
      if (nx === x2 && ny === y2) return moves + 1;
      if (nx >= 0 && nx < 50 && ny >= 0 && ny < 50 && !visited[nx][ny]) {
        queue.push([nx, ny, moves + 1]);
        visited[nx][ny] = true;
      }
    }
  }
}
```