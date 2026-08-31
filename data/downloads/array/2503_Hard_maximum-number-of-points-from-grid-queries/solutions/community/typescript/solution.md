# [BFS][Sort] See as a breakpoint during download

**Author:** zhi-zhi
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/solutions/2899496/](https://leetcode.com/problems/maximum-number-of-points-from-grid-queries/solutions/2899496/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Sort queries and then we can reuse previsous computation.
Just like breapoint resume.

# Approach
<!-- Describe your approach to solving the problem. -->
Conventional BFS

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(m*n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(m*n)$$

# Code
```
function maxPoints(grid: number[][], queries: number[]): number[] {
  const m = grid.length, n = grid[0].length, k = queries.length;
  const visited = Array.from(Array(m), () => Array(n).fill(false));
  const res = Array(k).fill(0);

  // sort to reuse the previous computation
  const sortQueries = queries.map((query, index) => [query, index]).sort((a, b) => a[0] - b[0]);
  // Record greater than or equal to the current value
  const canNotArrived: number[] = [0];
  const help = [[-1, 0], [0, 1], [1, 0], [0, -1]];

  for (let i = 0; i < k; i++) {
    const [query, index] = sortQueries[i];
    // like breakpoint resume;
    const count = bfs(query)

    // if i > 0, should plus the count of previous computation
    res[index] = (i > 0 ? res[sortQueries[i - 1][1]] : 0) + count;
  }

  // return result
  return res;


  /**
   * Conventional BFS
   * @param {number} val
   * @returns {number}
   */
  function bfs(val: number): number {
    let count = 0;
    const queue: number[] = [...canNotArrived];
    canNotArrived.length = 0

    while (queue.length > 0) {
      const next: number[] = [];

      for (const node of queue) {
        const row = Math.trunc(node / n), col = node % n;
        // has visited.
        if (visited[row][col]) continue;

        if (grid[row][col] < val) {
          // can visit
          visited[row][col] = true;
          count++;

          for (const [rowAddition, colAddition] of help) {
            const rowNew = rowAddition + row, colNew = colAddition + col;

            if (0 <= rowNew && rowNew < m && 0 <= colNew && colNew < n && !visited[rowNew][colNew])
              next.push(rowNew * n + colNew);
          }
        } else {
          // cur value can not arrive this node
          canNotArrived.push(node);
        }
      }

      queue.splice(0, queue.length, ...next);
    }

    return count;
  }
};


```