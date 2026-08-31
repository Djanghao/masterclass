# Quenching DFS

**Author:** tonitannoury01
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-of-connectable-servers-in-a-weighted-tree-network/solutions/6110551/](https://leetcode.com/problems/count-pairs-of-connectable-servers-in-a-weighted-tree-network/solutions/6110551/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
/**
 * @param {number[][]} edges
 * @param {number} signalSpeed
 * @return {number[]}
 */
function sumOfPairwiseProducts(arr) {
  let sum = 0;
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      sum += arr[i] * arr[j];
    }
  }

  return sum;
}
var countPairsOfConnectableServers = function (edges, signalSpeed) {
  let servers = new Set();
  for (let [a, b, w] of edges) {
    servers.add(a);
    servers.add(b);
  }
  let n = servers.size;
  let adjList = Array(n)
    .fill(0)
    .map(() => []);
  let visited = new Set();
  for (let [a, b, w] of edges) {
    adjList[a].push([b, w]);
    adjList[b].push([a, w]);
  }
  let dfs = (node, distance) => {
    if (visited.has(node)) {
      return 0;
    }
    visited.add(node);
    let countOfNodesWithDistanceDivBySpeed = 0;
    let neighbours = adjList[node];
    for (let [val, w] of neighbours) {
      countOfNodesWithDistanceDivBySpeed += dfs(val, distance + w);
    }
    if (distance % signalSpeed === 0) {
      countOfNodesWithDistanceDivBySpeed++;
    }
    return countOfNodesWithDistanceDivBySpeed;
  };
  let res = [];
  for (let c = 0; c < n; c++) {
    let neighbours = adjList[c];
    let neis = neighbours
      .filter((n) => n[1] % signalSpeed === 0)
      .map((e) => e[0]);
    if (neighbours.length <= 1) {
      res.push(0);
      continue;
    }
    let divisibles = [];
    for (let [val, w] of neighbours) {
      visited = new Set();
      visited.add(c);
      let countOfNodesWithDistanceDivBySpeed = dfs(val, w);
      divisibles.push(countOfNodesWithDistanceDivBySpeed);
    }
    res.push(sumOfPairwiseProducts(divisibles));
  }
  return res;
};
```