# ✅ Swift Solution. Runtime beats 75% [2186 ms], Memory beats 100% [29.6 MB].

**Author:** eleev
**Votes:** 2
**Link:** [https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/solutions/3464812/](https://leetcode.com/problems/checking-existence-of-edge-length-limited-paths/solutions/3464812/)

---

# Approach
As the backbone a variation of `Floyd Warshall's` algorithm is used, which is an all-pairs shortest path algorithm, to compute the shortest distance between all pairs of nodes in the graph considering only edges with distances less than the limit. A Union-Find data structure with path compression and union by rank was used for cases with large n.

## Time Complexity
The time complexity of this solution is `O(E * log(E) + Q * log(Q))`, where E is the number of edges and Q is the number of queries. This complexity should work efficiently for large values of n.

## Space Complexity
The space complexity is `O(n + E + Q)`, where n is the number of nodes, E is the number of edges, and Q is the number of queries. The space is used to store the `UnionFind` data structure, the sorted edges, the sorted queries, and the result array.

# Solution
```swift
class Solution {
    func distanceLimitedPathsExist(_ n: Int, _ edgeList: [[Int]], _ queries: [[Int]]) -> [Bool] {
        var edges = edgeList.sorted { $0[2] < $1[2] }
        var queriesWithIndex = queries.enumerated().sorted { $0.1[2] < $1.1[2] }
        var result = Array(repeating: false, count: queries.count)
        let uf = UnionFind(n)
        var edgeIndex = 0

        for (queryIndex, query) in queriesWithIndex {
            let p = query[0]
            let q = query[1]
            let limit = query[2]
        
            while edgeIndex < edges.count && edges[edgeIndex][2] < limit {
                let edge = edges[edgeIndex]
                uf.union(edge[0], edge[1])
                edgeIndex += 1
            }
        
            result[queryIndex] = uf.find(p) == uf.find(q)
        }
    
        return result
    }

    final class UnionFind {
        var parent: [Int]
        var rank: [Int]
    
        init(_ size: Int) {
            parent = Array(0..<size)
            rank = Array(repeating: 0, count: size)
        }
    
        func find(_ x: Int) -> Int {
            if parent[x] != x {
                parent[x] = find(parent[x])
            }
            return parent[x]
        }
    
        func union(_ x: Int, _ y: Int) {
            let rootX = find(x)
            let rootY = find(y)
        
            if rootX != rootY {
                if rank[rootX] > rank[rootY] {
                    parent[rootY] = rootX
                } else if rank[rootX] < rank[rootY] {
                    parent[rootX] = rootY
                } else {
                    parent[rootY] = rootX
                    rank[rootX] += 1
                }
            }
        }
    }
}
```