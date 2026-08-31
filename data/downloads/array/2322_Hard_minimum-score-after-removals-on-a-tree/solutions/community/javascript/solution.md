# JavaScript dfs solution

**Author:** wwwap
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/solutions/2200093/](https://leetcode.com/problems/minimum-score-after-removals-on-a-tree/solutions/2200093/)

---


```js
/**
 * @param {number[]} nums
 * @param {number[][]} edges
 * @return {number}
 */
const minimumScore = function (nums, edges) {
  const n = nums.length;
  let ans = Infinity;
  const visited = Array(n).fill(0);
  const pc = [];
  const adj = Array.from({ length: n }, () => []);
  const child_xor = Array(n).fill(0);
  const childs = Array.from({ length: n }, () => Array(n).fill(false));
  const { min, max } = Math;
  const par = Array(n).fill(0);

  for (const edge of edges)
    adj[edge[0]].push(edge[1]), adj[edge[1]].push(edge[0]);

  dfs(0);

  for (let i = 0; i < pc.length; i++)
    for (let j = i + 1; j < pc.length; j++) {
      // removing an edge i and j
      const a = pc[i][1],
        b = pc[j][1]; // node that will come below when you delete an edge i and j
      let xa = child_xor[a],
        xb = child_xor[b],
        xc = child_xor[0];
      if (childs[a][b]) (xc ^= xa), (xa ^= xb);
      else (xc ^= xa), (xc ^= xb);

      ans = min(max(xa, max(xb, xc)) - min(xa, min(xb, xc)), ans);
    }

  return ans;

  function dfs(i) {
    let ans = nums[i];
    visited[i] = true;

    for (let p of par) childs[p][i] = true; // Defining this node as the child of all its parents

    par.push(i);

    for (let child of adj[i] || [])
      if (!visited[child]) {
        pc.push([i, child]);
        ans ^= dfs(child); // Recurcively calculating xors
      }

    par.pop();

    return (child_xor[i] = ans);
  }
};
```