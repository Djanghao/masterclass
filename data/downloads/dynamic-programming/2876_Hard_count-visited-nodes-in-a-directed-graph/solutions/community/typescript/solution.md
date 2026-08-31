# Optimized Node Traversal Lengths in a Unidirectional Graph

**Author:** yogendra-pokhrel
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-visited-nodes-in-a-directed-graph/solutions/4136757/](https://leetcode.com/problems/count-visited-nodes-in-a-directed-graph/solutions/4136757/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Provided a unidirectional graph, a simple soultion would be to traverse through each node and find the maximum node that can be traversed

```
function calculateNodeLengths(edges: number[], index: number){
    const traversed = new Set<number>([index]);
    while (!traversed.has(edges[index])) {
        traversed.add(index);
        index = edges[index];
    }
    return traversed.size + 1;
}
```

However, In the above solution, we traverse through nodes that have already been visited, potentially degrading performance.


# Approach
<!-- Describe your approach to solving the problem. -->
1. Loop only if the given node is not already traversed or not in the current set.
2. If the traversed nodes are newly visited, then the length of elements will be the size of the traversed array.
3. If not, the size will be the length of the already visited node + 1.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
1. O(N) to loop through all elements in the provided edges
2. O(N) to prepare the maximum node that can be visited from a given node

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
1. O(N) for visited nodes
2. O(N) for storing edges

# Code
```
function countVisitedNodes(edges: number[]): number[] {
  const nodeLengths = new Array(edges.length);
  const numNodes = edges.length;
  
  const calculateNodeLengths = (index: number) => {
    const traversed = new Set<number>();

    while (!traversed.has(index) && !nodeLengths[index] ) {
      traversed.add(index);
      index = edges[index];
    }
    const visited = Array.from(traversed);
    if(traversed.has(index)){
    	let n = visited.length - visited.indexOf(index);
      for (let m = 0; m < n; ++m) {
             nodeLengths[visited.pop()] = n;
      }
    }
    
    while(visited.length > 0){
    	let key = visited.pop();
      nodeLengths[key] = nodeLengths[edges[key]] + 1;
    }
  }

  for (let i = 0; i < numNodes; i++) {
  calculateNodeLengths(i);
  }
  return nodeLengths;
}
```