# [Javascript] BFS & DFS

**Author:** anna-hcj
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimize-the-total-price-of-the-trips/solutions/3421669/](https://leetcode.com/problems/minimize-the-total-price-of-the-trips/solutions/3421669/)

---

**Solution: BFS & DFS**

Since it's a tree, there is only one path between each pair of nodes.

1. For each trip, use BFS to find the path from the start node to the end node.
  Keep track of totalPrice, where `totalPrice[i] = the total price from node i across all trips`.
  
2. Use DFS with memoization to find the minimum score from taking half price on non-alternate nodes.
  Memoize each `dfs(node, parentIsHalfPrice, parent)`.
  If the parent is half price, then this node cannot be half price.
  If the parent is not half price, we have two choices: either take half price or don't take half price.
  Return the minimum price.

`n = number of nodes`, `m = number of trips`
Time Complexity: `O(m * n^2 + n^2)`
Space Complexity: `O(n)`
```
var minimumTotalPrice = function(n, edges, price, trips) {
  let graph = Array(n).fill(0).map(() => []);
  for (let [a, b] of edges) {
    graph[a].push(b);
    graph[b].push(a);
  }
  let totalPrice = Array(n).fill(0);
  for (let [start, end] of trips) {
    let path = makeTrip(start, end);
    for (let node of path) {
      totalPrice[node] += price[node];
    }
  }
  let memo = new Map();
  return dfs(0, false, -1);
  
  function dfs(node, parentIsHalfPrice, parent) { // dfs with memoization to find the lowest price  
    let key = `${node},${parentIsHalfPrice},${parent}`;
    if (memo.has(key)) return memo.get(key);

    if (parentIsHalfPrice) {
      let ans = totalPrice[node];
      for (let nei of graph[node]) {
        if (nei === parent) continue;
        ans += dfs(nei, false, node);
      }
      memo.set(key, ans);
      return ans;
    }
    
    let takeHalfPrice = totalPrice[node] / 2, noHalfPrice = totalPrice[node];
    for (let nei of graph[node]) {
      if (nei === parent) continue;
      takeHalfPrice += dfs(nei, true, node);
      noHalfPrice += dfs(nei, false, node);
    }
    let ans = Math.min(takeHalfPrice, noHalfPrice);
    memo.set(key, ans);
    return ans;
  }
  
  function makeTrip(start, end) { // bfs to find the path from start to end
    let queue = [[start, [start]]], seen = Array(n).fill(0);
    seen[start] = 1;
    while (queue.length) {
      let [node, path] = queue.shift();
      if (node === end) return path;
      for (let nei of graph[node]) {
        if (seen[nei]) continue;
        seen[nei] = 1;
        queue.push([nei, [...path, nei]]);
      }
    }
  }
};
```