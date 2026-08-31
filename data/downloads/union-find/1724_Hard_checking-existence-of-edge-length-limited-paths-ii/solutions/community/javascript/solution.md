# Kruskal's Algorithm :)

**Author:** Asyncy99
**Votes:** 0
**Link:** [https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths-ii/solutions/5903394/](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths-ii/solutions/5903394/)

---

### Initialization
The structure uses three arrays:
- **Rank**: To manage the depth of each component.
- **Parent**: To track the parent of each node.
- **Version**: To store timestamps of when connections were made.

### Find Operation
The `find` method retrieves the root of an element, respecting the given timestamp `t`. If the node's version exceeds `t`, the node itself is returned.

### Union Operation
The `union` method merges two components, updating the parent and version arrays while maintaining ranks for optimization.

### Use Case
This structure is beneficial when edges may become irrelevant after a certain distance limit, enabling efficient path queries.

**Time & Space :**

TC:  O(ElogE)
SC: O(N), for maintaining the parent, rank, and version arrays


# Code
```javascript []
class UnionFind {
  constructor(n) {
    this.rank = Array(n).fill(0);
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.version = Array(n).fill(Infinity); // Version/timestamp of each node
  }

  find = (x, t = Infinity) => {
    // If the parent is the same as the node or its version is >= t, return `x`
    if (this.parent[x] === x || this.version[x] >= t) {
      return x;
    }
    return this.find(this.parent[x], t);
  }

  union = (x, y, t) => {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (this.rank[rootX] > this.rank[rootY]) {
      this.version[rootY] = t;
      this.parent[rootY] = rootX;
    } else {
      this.version[rootX] = t;
      this.parent[rootX] = rootY;
      if (this.rank[rootX] === this.rank[rootY]) {
        this.rank[rootY]++;
      }
    }
  }
}

class DistanceLimitedPathsExist {
  constructor(n, edgeList) {
    this.uf = new UnionFind(n);
    edgeList.sort((a, b) => a[2] - b[2]);
    for (const [u, v, dis] of edgeList) {
      this.uf.union(u, v, dis);
    }
  }

  // Check if there is a path between `p` and `q` with a distance limit
  query = (p, q, limit) => {
    // Return true if `p` and `q` are connected within the limit
    return this.uf.find(p, limit) === this.uf.find(q, limit);
  }
}
```