# JS solution - really tough problem tbh 🥲

**Author:** CuteTN
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree/solutions/3927651/](https://leetcode.com/problems/number-of-ways-to-reconstruct-a-tree/solutions/3927651/)

---

# Complexity
- Time complexity: $$O(n^2)$$
- Space complexity: $$O(pairs.length)$$

# Code
```jsx
/**
 * @param {number[][]} pairs
 * @return {number}
 */
var checkWays = function (pairs) {
  /** @typedef {{ id: number, adj: Set<number>, lab: number, overridden: boolean|undefined }} NodeInfo */
  /** @type {Map<number, NodeInfo>} */
  let graph = new Map();
  /** @type {NodeInfo[]} */
  let nodes = [];

  for (let [u, v] of pairs) {
    let ug = graph.get(u);
    let vg = graph.get(v);
    if (!ug) {
      ug = { adj: new Set(), lab: u, id: u };
      nodes.push(ug);
      graph.set(u, ug);
    }
    if (!vg) {
      vg = { adj: new Set(), lab: v, id: v };
      nodes.push(vg);
      graph.set(v, vg);
    }
    ug.adj.add(v);
    vg.adj.add(u);
  }

  let n = graph.size;
  nodes.sort((a, b) => a.adj.size - b.adj.size);
  let flag = 1;

  if (nodes[n - 1].adj.size !== n - 1) return 0;

  for (let i = 1; i < n; i++) {
    let count = 0;

    for (let j = 0; j < i; j++) nodes[j].overridden = undefined;
    for (let j = 0; j < i; j++) {
      const labNode = graph.get(nodes[j].lab);
      if (nodes[i].adj.has(nodes[j].id)) {
        if (labNode.overridden === false) return 0;

        if (labNode.overridden === undefined) {
          labNode.overridden = true;
          nodes[j].lab = nodes[i].id;
          count++;
        }
      } else {
        if (labNode.overridden === true) return 0;

        if (labNode.overridden === undefined) {
          labNode.overridden = false;
        }
      }
    }

    if (count === 1) flag = 2
  }

  return flag;
};
```