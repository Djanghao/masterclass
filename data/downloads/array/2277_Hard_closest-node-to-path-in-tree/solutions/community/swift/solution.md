# Swift: Beats 100% - DFS (Lowest Common Ancestor Approach)

**Author:** ashish-badak
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-node-to-path-in-tree/solutions/5515769/](https://leetcode.com/problems/closest-node-to-path-in-tree/solutions/5515769/)

---

# Intuition
This problem is similar to [Lowest Common Ancestor](https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-tree/description/).

For every query, `query[i] = [starti, endi, nodei]`, consider `nodei` as root of the tree and start solving this problem as Lowest Common Ancestor.

# Approach
1. Construct Adjacency list
2. For evry query start DFS for finding least common ancestor, and keep storing it in result array.
3. Return result array.

# Complexity
- Time complexity: O(V + E)
- Space complexity: O(V + E)


# Code
```
class Solution {
    func closestNode(_ n: Int, _ edges: [[Int]], _ query: [[Int]]) -> [Int] {
        var adjacency: [Int: Set<Int>] = [:]
        for edge in edges {
            adjacency[edge[0], default: []].insert(edge[1])
            adjacency[edge[1], default: []].insert(edge[0])
        }

        var closestNodes: [Int] = []
        for q in query {
            var visited = Set<Int>()
            if let closest = lca(q[2], q[0], q[1], adjacency, &visited).closest {
                closestNodes.append(closest)
            }
        }
        return closestNodes
    }

    func lca(
        _ root: Int, _ num1: Int, _ num2: Int,
        _ adjacency: [Int: Set<Int>], _ visited: inout Set<Int>
    ) -> (closest: Int?, matches: Int) {
        if visited.contains(root) { return (nil, 0) }
        visited.insert(root)

        if root == num1 && root == num2 { return (root, 2) }
        guard let neighbors = adjacency[root] else { return (nil, 0) }
        var matches = 0
        if root == num1 || root == num2 { matches += 1 }

        for neighbor in neighbors {
            let neighborLCA = lca(neighbor, num1, num2, adjacency, &visited)
            guard neighborLCA.closest == nil else { return neighborLCA }
            
            matches += neighborLCA.matches

            if matches == 2 { return (root, matches) }
        }

        return (nil, matches)
    }
}
```