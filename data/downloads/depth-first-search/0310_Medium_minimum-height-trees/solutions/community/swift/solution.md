# 🚦Great approach in swift with detailed explanation

**Author:** lebon
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-height-trees/solutions/5063596/](https://leetcode.com/problems/minimum-height-trees/solutions/5063596/)

---

# Intuition
The problem requires finding the root nodes of trees with minimum height in an undirected graph. The approach involves identifying leaf nodes (nodes with a degree of 1) and trimming the graph iteratively until only potential root nodes remain.

# Approach
1. **Base Case Check**:
   - If there is only one node (`n == 1`), return this single node as the result since it forms a tree by itself.

2. **Graph Representation**:
   - Construct an adjacency list (`adjList`) to represent the graph's connections.
   - Initialize a `degree` array to track the degree (number of edges) for each node.

3. **Identify Leaf Nodes**:
   - Traverse through the given `edges` to populate `adjList` and update `degree` accordingly.
   - Identify leaf nodes (nodes with degree 1) and store them in the `leaves` array.

4. **Breadth-First Search (BFS) Traversal**:
   - Utilize a BFS-like approach to trim the tree:
     - Initialize a `leaves` array with initial leaf nodes.
     - Iteratively remove leaf nodes, decrease neighboring nodes' degrees, and identify new leaf nodes.
     - Continue this process until only potential root nodes remain (`remainingNodes <= 2`).

5. **Finalize Result**:
   - The remaining nodes in `leaves` after the BFS traversal represent potential root nodes of trees with minimum height.
   - Return these nodes as the final result.

# Complexity
- Time complexity: 
  - Building the adjacency list and degree array takes O(E) time, where E is the number of edges.
  - The BFS traversal processes each node and its neighbors efficiently, resulting in O(n + E) time complexity.
  
- Space complexity:
  - Additional space is used for `adjList`, `degree`, `leaves`, and `result` arrays, resulting in O(n) space complexity to manage the graph structure and traversal effectively. The space usage is optimized to handle the graph's size efficiently.


# Code
```
class Solution {
    func findMinHeightTrees(_ n: Int, _ edges: [[Int]]) -> [Int] {
       var result = [Int]()
    if n == 1 {
        result.append(0)
        return result
    }
    
    var adjList = [[Int]](repeating: [], count: n)
    var degree = [Int](repeating: 0, count: n)
    
    for edge in edges {
        adjList[edge[0]].append(edge[1])
        adjList[edge[1]].append(edge[0])
        degree[edge[0]] += 1
        degree[edge[1]] += 1
    }
    
    var leaves = [Int]()
    for i in 0..<n {
        if degree[i] == 1 {
            leaves.append(i)
        }
    }
    
    var remainingNodes = n
    while remainingNodes > 2 {
        let size = leaves.count
        remainingNodes -= size
        for _ in 0..<size {
            let leaf = leaves.removeFirst()
            for neighbor in adjList[leaf] {
                degree[neighbor] -= 1
                if degree[neighbor] == 1 {
                    leaves.append(neighbor)
                }
            }
        }
    }
    
    result = leaves
    return result 
    }
}
```