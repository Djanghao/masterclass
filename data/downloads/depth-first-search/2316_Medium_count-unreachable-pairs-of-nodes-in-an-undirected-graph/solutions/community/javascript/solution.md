# Beats 100% | JS solution using union-find instead of DFS

**Author:** sanukhandev
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/3339255/](https://leetcode.com/problems/count-unreachable-pairs-of-nodes-in-an-undirected-graph/solutions/3339255/)

---

# Intuition
The problem of counting the number of pairs of different nodes that are unreachable from each other in an undirected graph is essentially asking us to find the number of disconnected pairs of nodes. In other words, we need to count the number of pairs of nodes that are not reachable from each other through any path in the graph.

The intuition behind this problem is that it allows us to understand the connectivity of a graph. A connected graph is one where there is a path between any pair of nodes, while a disconnected graph is one where there are two or more subgraphs that are not connected to each other.

By counting the number of disconnected pairs of nodes in a graph, we can understand how many subgraphs there are, and how isolated they are from each other. This can be useful in a variety of applications, such as social networks, transportation networks, and computer networks, where it is important to understand the connectivity and isolation of different parts of the network.

# Approach:  Union-Find
The union-find data structure to count the number of nodes in each connected component. The union-find data structure is a data structure that keeps track of a set of elements partitioned into a number of disjoint subsets. It provides two operations:
1. Find: Determine which subset a particular element belongs to.
2. Union: Join two subsets into a single subset.

We can use the union-find data structure to maintain a forest of disjoint trees, where each tree represents a connected component of the graph. Initially, each node is its own parent, and each tree has size 1. We then union each edge in the edges array using the union-find data structure. Finally, we count the number of nodes in each connected component by finding the parent of each node and computing the size of its tree.

# Complexity
The time complexity of the union-find data structure is O(nlogn) in the worst case, where n is the number of nodes, and the space complexity is O(n).

# Code
```
var countPairs = function(n, edges) {
    let parent = new Array(n);
    let size = new Array(n);
    for (let i = 0; i < n; ++i) {
        parent[i] = i;
        size[i] = 1;
    }
    let numVisitedNodes = 0;
    let numUnreachablePairsOfNodes = 0;

    for (let i = 0; i < edges.length; ++i) {
        let u = edges[i][0];
        let v = edges[i][1];
        union(u, v, parent, size);
    }

    for (let node = 0; node < n; ++node) {
        if (parent[node] === node) {
            let numNodesInCurrentGroup = size[node];
            numUnreachablePairsOfNodes += (numNodesInCurrentGroup * numVisitedNodes);
            numVisitedNodes += numNodesInCurrentGroup;
        }
    }
    return numUnreachablePairsOfNodes;
};

var find = function(node, parent) {
    while (node !== parent[node]) {
        node = parent[node];
    }
    return node;
};

var union = function(u, v, parent, size) {
    let rootU = find(u, parent);
    let rootV = find(v, parent);
    if (rootU !== rootV) {
        if (size[rootU] < size[rootV]) {
            [rootU, rootV] = [rootV, rootU];
        }
        parent[rootV] = rootU;
        size[rootU] += size[rootV];
    }
};

```