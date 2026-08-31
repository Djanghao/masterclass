# Unlock the Secret to Efficiently Computing Tree Distances with this Two-Step DFS Algorithm!

**Author:** ImBIOS
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-distances-in-tree/solutions/5081684/](https://leetcode.com/problems/sum-of-distances-in-tree/solutions/5081684/)

---

# Intuition
Upon first glance, this problem seems like it could benefit from a depth-first search (DFS) approach due to the tree structure. Considering the nature of the problem, where we need to calculate the sum of distances for each node, it's essential to efficiently traverse the tree and accumulate the distances.

# Approach
To tackle this problem, we'll utilize a two-step DFS strategy. 
1. **First DFS**: We'll traverse the tree to calculate two important metrics for each node:
   - The number of nodes in its subtree.
   - The sum of distances within its subtree.
2. **Second DFS**: With the information gathered from the first DFS, we'll update the sum of distances for each node based on its parent node's values.

This approach ensures that we efficiently compute the sum of distances for each node by leveraging the tree structure and avoiding redundant calculations.

# Complexity
- Time complexity:  
  The time complexity for both DFS traversals is O(n), where n is the number of nodes in the tree. Therefore, the overall time complexity is O(n).
  
- Space complexity:  
  The space complexity is also O(n), where n is the number of nodes in the tree. This is primarily due to the adjacency list and arrays used to store subtree node counts and distance sums.

# Code
```ts
function sumOfDistancesInTree(n: number, edges: number[][]): number[] {
    const adjList: number[][] = Array.from({ length: n }, () => []);
    const subtreeNodeCount: number[] = Array(n).fill(1); // Initialize each node's subtree node count to 1 (itself)
    const subtreeDistSum: number[] = Array(n).fill(0); // Initialize each node's subtree distance sum to 0

    // Create adjacency list
    for (const [a, b] of edges) {
        adjList[a].push(b);
        adjList[b].push(a);
    }

    // DFS to calculate subtree node count and sum of distances
    const dfs1 = (node: number, parent: number) => {
        for (const neighbor of adjList[node]) {
            if (neighbor !== parent) {
                dfs1(neighbor, node);
                subtreeNodeCount[node] += subtreeNodeCount[neighbor];
                subtreeDistSum[node] += subtreeDistSum[neighbor] + subtreeNodeCount[neighbor];
            }
        }
    };

    // DFS to update sum of distances based on parent node's values
    const dfs2 = (node: number, parent: number) => {
        for (const neighbor of adjList[node]) {
            if (neighbor !== parent) {
                subtreeDistSum[neighbor] = subtreeDistSum[node] - subtreeNodeCount[neighbor] + (n - subtreeNodeCount[neighbor]);
                dfs2(neighbor, node);
            }
        }
    };

    // Perform first DFS traversal
    dfs1(0, -1);
    // Perform second DFS traversal
    dfs2(0, -1);

    return subtreeDistSum;
};
```