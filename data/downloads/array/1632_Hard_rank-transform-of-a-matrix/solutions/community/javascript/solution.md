# Union Find + Sorting | Modern ES6

**Author:** Asyncy99
**Votes:** 0
**Link:** [https://leetcode.com/problems/rank-transform-of-a-matrix/solutions/5986604/](https://leetcode.com/problems/rank-transform-of-a-matrix/solutions/5986604/)

---

TC: O(m * n * log(m + n))
SC: O(m * n)

This problem is similar to [Minimize Maximum Value in a Grid](https://leetcode.com/problems/minimize-maximum-value-in-a-grid)

Here's my solution : [Minimize Maximum Value in a Grid Solution](https://leetcode.com/problems/minimize-maximum-value-in-a-grid/solutions/5986541/topological-sorting-minheap/?envType=problem-list-v2&envId=topological-sort)

---

```javascript []
class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.size = new Array(n).fill(1);
  }

  find(x) {
    if (this.parent[x] !== x) {
      this.parent[x] = this.find(this.parent[x]);
    }
    return this.parent[x];
  }

  union(a, b) {
    const rootA = this.find(a);
    const rootB = this.find(b);
    if (rootA !== rootB) {
      if (this.size[rootA] > this.size[rootB]) {
        this.parent[rootB] = rootA;
        this.size[rootA] += this.size[rootB];
      } else {
        this.parent[rootA] = rootB;
        this.size[rootB] += this.size[rootA];
      }
    }
  }

  reset(x) {
    this.parent[x] = x;
    this.size[x] = 1;
  }
}

function matrixRankTransform(matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  const d = new Map();

  // Group positions by their values
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      const value = matrix[i][j];
      if (!d.has(value)) {
        d.set(value, []);
      }
      d.get(value).push([i, j]);
    }
  }

  const rowMax = new Array(m).fill(0);
  const colMax = new Array(n).fill(0);
  const ans = Array.from({ length: m }, () => new Array(n).fill(0));
  const uf = new UnionFind(m + n);

  // Process each unique value in sorted order
  for (const [value, positions] of [...d.entries()].sort((a, b) => a[0] - b[0])) {
    const rank = new Map();

    // Union rows and columns for the same value
    for (const [i, j] of positions) {
      uf.union(i, j + m);
    }

    // Calculate rank based on current union-find structure
    for (const [i, j] of positions) {
      const root = uf.find(i);
      rank.set(root, Math.max(rank.get(root) || 0, rowMax[i], colMax[j]));
    }

    // Assign ranks to the answer and update row and column maxes
    for (const [i, j] of positions) {
      const root = uf.find(i);
      const newRank = 1 + (rank.get(root) || 0);
      ans[i][j] = newRank;
      rowMax[i] = newRank;
      colMax[j] = newRank;
    }

    // Reset union-find structure for next value
    for (const [i, j] of positions) {
      uf.reset(i);
      uf.reset(j + m);
    }
  }

  return ans;
}
```