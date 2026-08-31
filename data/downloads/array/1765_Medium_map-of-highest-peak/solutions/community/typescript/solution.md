# TypeScript BFS

**Author:** fdtfbn
**Votes:** 0
**Link:** [https://leetcode.com/problems/map-of-highest-peak/solutions/5447631/](https://leetcode.com/problems/map-of-highest-peak/solutions/5447631/)

---

# Complexity
- Time complexity: $$O(mn)$$

- Space complexity: $$O(mn)$$

# Code
```
function highestPeak(isWater: number[][]): number[][] {
  const m = isWater.length
  const n = isWater[0].length

  let queue: number[][] = []
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (isWater[y][x]) {
        queue.push([y, x])
      }
    }
  }

  let height = 0
  const result: number[][] = Array.from({length: m}, () => [])
  let newQueue: number[][] = []
  while (queue.length) {
    for (const [y, x] of queue) {
      if (result[y][x] !== undefined) {
        continue
      }
      result[y][x] = height
      if (x >= 1 && result[y][x - 1] === undefined) {
        newQueue.push([y, x - 1])
      }
      if (x + 1 < n && result[y][x + 1] === undefined) {
        newQueue.push([y, x + 1])
      }
      if (y >= 1 && result[y - 1][x] === undefined) {
        newQueue.push([y - 1, x])
      }
      if (y + 1 < m && result[y + 1][x] === undefined) {
        newQueue.push([y + 1, x])
      }
    }
    [queue, newQueue] = [newQueue, queue]
    newQueue.splice(0)
    height++
  }

  return result
};
```