# [JavaScript] Union Find

**Author:** dreamjean
**Votes:** 1
**Link:** [https://leetcode.com/problems/gcd-sort-of-an-array/solutions/3025621/](https://leetcode.com/problems/gcd-sort-of-an-array/solutions/3025621/)

---

```
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var gcdSort = function(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  const max = Math.max(...nums);
  const uf = new UnionFind(max + 1);
  
  for (let num of nums) {
    let curr = num;
    if (uf.parentChanged(curr)) continue;
    for (let i = 2; i <= Math.sqrt(curr); i++) {
      if (!(curr % i)) {
        uf.union(num, i);
        while (!(curr % i)) curr /= i;
      }
    }
    
    if (curr > 1) uf.union(num, curr);
  }
  
  return nums.every((num, i) => uf.connected(num, sorted[i]));
};

class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.size = new Array(n).fill(1);
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

    const { parent, size } = this;
    if (size[rootX] < size[rootY]) {
      parent[rootX] = rootY;
      size[rootY] += size[rootX];
    } else {
      parent[rootY] = rootX;
      size[rootX] += size[rootY];
    }
  }
}
```