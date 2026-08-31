# Simple Dijkstra

**Author:** Asyncy99
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-closest-marked-node/solutions/6085014/](https://leetcode.com/problems/find-the-closest-marked-node/solutions/6085014/)

---

```javascript []
/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} s
 * @param {number[]} marked
 * @return {number}
 */
var minimumDistance = function (n, edges, s, marked) {
  const adj = Array.from({ length: n }, () => [])

  //Step 1 :  Build an AdjacencyList
  for (const [u, v, w] of edges) {
    adj[u].push([v, w])  //Directed Edge  (u ->v)
  }

  //Step 2: Create a Distance Array
  const dist = Array(n).fill(Infinity)
  dist[s] = 0  //Starting point

  const PQ = new MinPriorityQueue({ priority: (x) => x[1] });  //LC MinHeap
  PQ.enqueue([s, 0])  //Source, distance=0

  // Step 3: Dijkstra's algorithm to find the shortest paths from s
  while (!PQ.isEmpty()) {
    const [node, d] = PQ.dequeue().element
    // If the current distance is greater than the known shortest distance, continue
    if (d > dist[node]) continue

    for (const [nbr, w] of adj[node]) {
      const newCost = d + w
      if (newCost < dist[nbr]) {
        dist[nbr] = newCost
        PQ.enqueue([nbr, newCost])
      }
    }
  }

  //Step 4: Find min distance to any marked node in marked
  let min = Infinity
  for (const m of marked) {
    min = Math.min(min, dist[m])
  }

  //return minDist === Infinity ? -1 : minDist;
  return isFinite(min) ? min : -1 // ES6 isFinite(x)
};
```