# JavaScript / TypeScript Solution

**Author:** eddyhdzg
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-if-path-exists-in-graph/solutions/1737740/](https://leetcode.com/problems/find-if-path-exists-in-graph/solutions/1737740/)

---

```
// JavaScript
var validPath = function (_, edges, source, destination) {
  if (source === destination) return true;

  const uf = {};
  for (const [u, v] of edges) {
    if (uf[u] == undefined) uf[u] = new Set();
    if (uf[v] == undefined) uf[v] = new Set();

    uf[u].add(v);
    uf[v].add(u);
  }

  const visited = new Set();

  const dfs = (x, target) => {
    if (visited.has(x) || !(x in uf)) return false;
    visited.add(x);
    const neighbours = uf[x];
    if (neighbours.has(target)) return true;
    return Array.from(neighbours).some((neighbour) => dfs(neighbour, target));
  };

  return dfs(source, destination);
};
```

```
// TypeScript
function validPath(
  _: number,
  edges: number[][],
  source: number,
  destination: number
): boolean {
  if (source === destination) return true;

  const uf: { [vertice: number]: Set<number> } = {};
  for (const [u, v] of edges) {
    if (uf[u] == undefined) uf[u] = new Set<number>();
    if (uf[v] == undefined) uf[v] = new Set<number>();

    uf[u].add(v);
    uf[v].add(u);
  }

  const visited = new Set<number>();

  const dfs = (x: number, target: number): boolean => {
    if (visited.has(x) || !(x in uf)) return false;
    visited.add(x);
    const neighbours = uf[x];
    if (neighbours.has(target)) return true;
    return Array.from(neighbours).some((neighbour) => dfs(neighbour, target));
  };

  return dfs(source, destination);
}
```

More leetcode TypeScript solutions at https://github.com/eddyhdzg/leetcode-typescript-solutions
