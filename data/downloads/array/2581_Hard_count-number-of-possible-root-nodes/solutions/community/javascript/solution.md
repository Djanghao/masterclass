# Count Number Of Possible Root Nodes

**Author:** RockstarPabitra
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-number-of-possible-root-nodes/solutions/3486266/](https://leetcode.com/problems/count-number-of-possible-root-nodes/solutions/3486266/)

---

Since we don't have tuples in JS, we just gotta figure out how to identify matching edges as we traverse over them. The constraints are small enough that we can encode an edge in a number - given ```
nodeA and nodeB
```, `nodeA` -> `nodeB = nodeA * 1_000_000 + nodeB.`

# Code
```
/**
 * @param {number[][]} edges
 * @param {number[][]} guesses
 * @param {number} k
 * @return {number}
 */
var rootCount = function (edges, guesses, k) {
  const lookup = new Set(guesses.map(([a, b]) => a * 1_000_000 + b));
  const adjList = edges.reduce((adjList, [a, b]) => {
    adjList[a].push(b);
    adjList[b].push(a);
    return adjList;
  }, new Array(edges.length + 1).fill(0).map(() => []));

  const guessed = (a, b) => lookup.has(a * 1_000_000 + b) ? 1 : 0;

  const getCorrect = (node, parent) =>
    adjList[node].reduce((total, child) =>
      child === parent
        ? total
        : total + guessed(node, child) + getCorrect(child, node),
      0);

  const getTotal = (node, parent, correct) => (
    (correct >= k ? 1 : 0) +
    adjList[node].reduce((total, child) =>
      child === parent
        ? total
        : total + getTotal(child, node, correct - guessed(node, child) + guessed(child, node)),
      0)
  );

  return getTotal(0, -1, getCorrect(0, -1));
};
```