# Clean JavaScript solution (Kruskal's algorithm + Union Find)

**Author:** Hongbo-Miao
**Votes:** 13
**Link:** [https://leetcode.com/problems/connecting-cities-with-minimum-cost/solutions/409250/](https://leetcode.com/problems/connecting-cities-with-minimum-cost/solutions/409250/)

---

Introduction to Kruskal's algorithm https://www.youtube.com/watch?v=71UQH7Pr9kU
Introduction to Union Find https://www.youtube.com/watch?v=0jNmHPfA_yE
Introduction to Union Find Path Compression https://www.youtube.com/watch?v=VHRhJWacxis

```
function minimumCost(N, connections) {
  let n = N;

  const parents = [];
  for (let i = 0; i < N; i++) parents.push(i);

  function union(u, v) {
    const p1 = find(u);
    const p2 = find(v);

    if (p1 !== p2) {
      parents[p1] = p2;
      n--;
    }
  }

  // Find root
  function find(u) {
    if (u === parents[u]) return u;
    return parents[u] = find(parents[u]); // path compression
  }

  connections.sort((a, b) => a[2] - b[2]);

  let res = 0;
  for (const [u, v, cost] of connections) {
    if (find(u) !== find(v)) {
      res += cost;
      union(u, v);
    }
  }
  return n === 1 ? res : -1;
}
```

More at https://github.com/Hongbo-Miao/leetcode