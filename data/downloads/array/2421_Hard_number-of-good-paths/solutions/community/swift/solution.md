# ✅ Clean swift solution

**Author:** kulizhnikov
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-good-paths/solutions/3056268/](https://leetcode.com/problems/number-of-good-paths/solutions/3056268/)

---

# Complexity
- Time complexity: O(n * log(n))

- Space complexity: O(n)

# Code
```
class Solution {
    func numberOfGoodPaths(_ vals: [Int], _ edges: [[Int]]) -> Int {
        let disjointSet = DisjointSet(n: vals.count)

        var nextNodesFor: [Int: [Int]] = [:]
        for edge in edges {
            nextNodesFor[edge[0], default: []].append(edge[1])
            nextNodesFor[edge[1], default: []].append(edge[0])
        }

        var nodesWithValue: [Int: [Int]] = [:]        
        for (node, val) in vals.enumerated() {
            nodesWithValue[val, default: []].append(node)
        }
        let sorted = nodesWithValue.sorted { $0.key < $1.key }

        var goodPaths = 0
        for (value, nodes) in sorted {
            // Step 1: form graph from vertices with minimum values
            for node in nodes {
                for neighbor in nextNodesFor[node, default: []] {
                    if vals[node] >= vals[neighbor] {
                        disjointSet.union(node, neighbor)
                    }
                }
            }

            // Step 2: find out how many vertices are in the same component
            var nodesWithSameValueInComponent: [Int: Int] = [:]
            for node in nodes {
                let component = disjointSet.find(node)
                nodesWithSameValueInComponent[component, default: 0] += 1
            }

            for (_, n) in nodesWithSameValueInComponent {
                goodPaths += n * (n + 1) / 2
            }
        }

        return goodPaths
    }
}

class DisjointSet {
    var root: [Int]
    var rank: [Int]

    init(n: Int) {
        root = Array(repeating: 0, count: n)
        rank = Array(repeating: 1, count: n)

        for i in 1..<n {
            root[i] = i
            rank[i] = 1
        }
    }

    func find(_ x: Int) -> Int {
        guard x != root[x] else { return x }

        let rootX = find(root[x])
        root[x] = rootX
        return rootX
    }

    func union(_ x: Int, _ y: Int) {
        let rootX = find(x)
        let rootY = find(y)

        if rootX != rootY {
            if rank[rootX] > rank[rootY] {
                root[rootY] = rootX
            } else if rank[rootX] < rank[rootY] {
                root[rootX] = rootY
            } else {
                root[rootY] = rootX
                rank[rootX] += 1
            }
        }
    }

    func isConnected(_ x: Int, _ y: Int) -> Bool {
        return find(x) == find(y)
    }
}
```
---

If my LeetCode solution was helpful, kindly upvote it to support my contributions and aid others in their coding journey! \uD83D\uDE0A\uD83D\uDC4D