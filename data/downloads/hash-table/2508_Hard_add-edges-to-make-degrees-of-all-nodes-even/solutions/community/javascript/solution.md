# Simple and obvious solution with comments 😊

**Author:** gulevskii
**Votes:** 1
**Link:** [https://leetcode.com/problems/add-edges-to-make-degrees-of-all-nodes-even/solutions/2924473/](https://leetcode.com/problems/add-edges-to-make-degrees-of-all-nodes-even/solutions/2924473/)

---



# Code
```
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
var isPossible = function(n, edges) {
  const graph = new Map()
  const odd = []
    
  // Making graph [{node: Set(...edges)}, ...]
  for (let edge of edges) { 
    const [from,to] = edge    
    // Connect first node with second in a graph
    if (graph.has(from)) {
      graph.get(from).add(to)
    } else {
      const set = new Set([to])
      graph.set(from,  set)
    }
    // Connect second node with first in a graph
    if (graph.has(to)) {
      graph.get(to).add(from)
    } else {
      const set = new Set([from])
      graph.set(to,  set)
    }
  }

  // Find all edges with odd length
  for (let [key,value] of graph) {
    if (value.size % 2 !== 0) {
      odd.push(key)
    }
  }

  if (odd.length === 4) {
    // Check if 2 nodes havent edges between each other
    const [a,b,c,] = [graph.get(odd[0]),graph.get(odd[1]),graph.get(odd[2])]
    if ( !a.has(odd[1]) && !c.has(odd[3]) // AB CD
      || !a.has(odd[2]) && !b.has(odd[3]) // AC BD
      || !a.has(odd[3]) && !c.has(odd[1])) //AD CB
    {       
        return true
    }
  }

  if (odd.length === 2) {
    const a = graph.get(odd[0])
    // Check if 1st node hasn't edge between 2nd node
    if (!a.has(odd[1])) return true

    // Also if nodes two node has edges between each other
    // we need to find in graph node which hasn't edge 
    // beteween 1st and 2nd node
    for (let [_, currentEdges] of graph) {
      if (!currentEdges.has(odd[0]) && !currentEdges.has(odd[1])) {
        return true
      }
    }
  }

  // Otherwise return false :)
  return odd.length === 0
}
```