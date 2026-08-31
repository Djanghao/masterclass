# Swift Union Find with path compression and rank

**Author:** mingtee
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/solutions/2155043/](https://leetcode.com/problems/the-earliest-moment-when-everyone-become-friends/solutions/2155043/)

---

```
class Solution {
    
    // Union Find
    // Time complexity: O(N + M log M + M\u03B1(N))   
    // Space complexity: O(N + M)
    func earliestAcq(_ logs: [[Int]], _ n: Int) -> Int {
        
        if (logs.count < n - 1) { return -1 }
        
        let unionFind = UnionFind(vertexCount: n)
        let sortedLogs = logs.sorted { $0[0] < $1[0] }
        var unionCount = n - 1
        for log in sortedLogs {
            if unionFind.union(log[1], log[2]) {
                unionCount -= 1
            }
            
            if unionCount == 0 {
                return log[0]
            }
        }
        
        return -1
    }
}

class UnionFind {
    
    var rank: [Int]
    var parent: [Int]
    
    init(vertexCount: Int) {
        rank = Array(repeating: 1, count: vertexCount)
        parent = Array(repeating: -1, count: vertexCount)
    }
    
    func findRoot(_ vertex: Int) -> Int {
        if parent[vertex] == -1 {
            return vertex
        }
        
        parent[vertex] = findRoot(parent[vertex])
        return parent[vertex]
    }
    
    func union(_ one: Int, _ two: Int) -> Bool {
        let rootOne = findRoot(one)
        let rootTwo = findRoot(two)
        
        if rootOne == rootTwo {
            return false
        }
        
        if rank[rootOne] > rank[rootTwo] {
            parent[rootTwo] = rootOne
        } else if rank[rootOne] < rank[rootTwo] {
            parent[rootOne] = rootTwo
        } else {
            parent[rootTwo] = rootOne
            rank[rootOne] += 1
        }
        return true
    }
}
```