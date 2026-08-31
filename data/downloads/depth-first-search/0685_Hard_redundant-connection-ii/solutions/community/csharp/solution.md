# Optimized Solution Using Disjoint Sets: Finding Redundant Directed Connection in a Rooted Tree

**Author:** crazyycoder805
**Votes:** 0
**Link:** [https://leetcode.com/problems/redundant-connection-ii/solutions/5080762/](https://leetcode.com/problems/redundant-connection-ii/solutions/5080762/)

---

# Intuition
To solve this problem, we can use the concept of disjoint sets (also known as Union-Find) to determine the redundant edge in the given directed graph.
# Approach
Initialize an array parent to keep track of the parent node for each node.
Traverse through the edges:
If we encounter a node v whose parent is already assigned, mark the current edge and the previous edge as candidates for removal.
Initialize an array root to represent the disjoint sets.
Traverse through the edges again:
If the current edge is one of the candidates for removal, skip it.
Otherwise, find the root of the nodes connected by the current edge using the find function.
If the roots are the same, it means there's a cycle. If there's a previously identified candidate for removal, return it; otherwise, return the current edge.
If no cycle is found during the traversal, return the second candidate for removal.
# Complexity
- Time complexity:
O(n), where n is the number of edges. Both traversals through the edges take linear time.
- Space complexity:
O(n) for the parent and root arrays.
# Code
```
var findRedundantDirectedConnection = function(edges) {
    let parent = new Array(edges.length + 1).fill(0);
    let candidate1 = [],
        candidate2 = [];

    for (let [u, v] of edges) {
        if (parent[v] !== 0) {
            candidate1 = [parent[v], v];
            candidate2 = [u, v];
            break;
        }
        parent[v] = u;
    }

    let root = new Array(edges.length + 1).fill(0).map((_, i) => i);
    for (let [u, v] of edges) {
        if (u === candidate2[0] && v === candidate2[1]) continue;
        let pu = find(root, u),
            pv = find(root, v);
        if (pu === pv) {
            if (candidate1.length > 0) return candidate1;
            return [u, v];
        }
        root[pu] = pv;
    }

    return candidate2;

    function find(root, node) {
        while (root[node] !== node) {
            root[node] = root[root[node]];
            node = root[node];
        }
        return node;
    }
};

```