# [JavaScript] Union Find

**Author:** dreamjean
**Votes:** 0
**Link:** [https://leetcode.com/problems/graph-connectivity-with-threshold/solutions/3034682/](https://leetcode.com/problems/graph-connectivity-with-threshold/solutions/3034682/)

---

```
/**
 * @param {number} n
 * @param {number} threshold
 * @param {number[][]} queries
 * @return {boolean[]}
 */
var areConnected = function(n, threshold, queries) {
  const uf = new UnionFind(n + 1);
  
  for (let i = threshold + 1; i <= n; i++) {
    if (uf.parentChanged(i)) continue;
    for (let j = i * 2; j <= n; j += i) {
      if (!(j % i)) uf.union(i, j);
    }
  }
  
  return queries.map(([a, b]) => uf.connected(a, b));
};

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
  }
  
  find(x) {
    const parent = this.parent;
    while (x !== parent[x]) {
      parent[x] = parent[parent[x]];
      x = parent[x];
    }
    
    return x;
  }
  
  parentChanged(x) {
    return this.parent[x] !== x;
  }
  
  connected(x, y) {
    return this.find(x) === this.find(y);
  }
  
  union(x, y) {
    const rootX = this.find(x);
    const rootY = this.find(y);
    if (rootX === rootY) return;
    
    rootX < rootY
      ? this.parent[rootX] = rootY
      : this.parent[rootY] = rootX
  }
}
```