# Javascript - Topological Sort + BFS

**Author:** faustaleonardo
**Votes:** 0
**Link:** [https://leetcode.com/problems/create-components-with-same-value/solutions/5009999/](https://leetcode.com/problems/create-components-with-same-value/solutions/5009999/)

---

# Code
```
/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number}
 */
var componentValue = function (nums, edges) {
  const n = nums.length;
  const degrees = new Array(n).fill(0);
  const graph = new Array(n).fill().map((_) => []);

  for (const [v1, v2] of edges) {
    graph[v1].push(v2);
    graph[v2].push(v1);
    degrees[v1]++;
    degrees[v2]++;
  }

  let sum = 0;
  const queue = [];
  for (let i = 0; i < n; i++) {
    if (degrees[i] === 1) queue.push(i);
    sum += nums[i];
  }

  for (let i = n; i >= 1; i--) {
    if (sum % i !== 0) continue;
    const result = bfs(
      sum / i,
      degrees.slice(),
      queue.slice(),
      nums.slice(),
      graph
    );
    if (result) return i - 1;
  }

  return 0;
};

function bfs(target, degrees, queue, nums, graph) {
  while (queue.length) {
    const curr = queue.shift();
    degrees[curr] = 0;
    for (const next of graph[curr]) {
      if (nums[curr] !== target) nums[next] += nums[curr];
      degrees[next]--;
      if (degrees[next] === 0) return nums[next] === target;
      if (degrees[next] === 1) queue.push(next);
    }
  }

  return false; // unreachable
}

```