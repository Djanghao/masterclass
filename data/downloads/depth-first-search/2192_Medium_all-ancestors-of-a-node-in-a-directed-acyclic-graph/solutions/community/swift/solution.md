# Swift Topological Sort

**Author:** duyetnt
**Votes:** 2
**Link:** [https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/solutions/1822164/](https://leetcode.com/problems/all-ancestors-of-a-node-in-a-directed-acyclic-graph/solutions/1822164/)

---

This is a classical Topolical sort problem. 
* Build `graph` from `edges`
* Start with all nodes `u` which don't have any incoming edges
* Visit all children of node `u`, for each child `v`, insert `u` as well as `ancestors[u]` as ancestors of `v`. We need to use `Set` to avoid any duplication
* Repeat until we've already processed all nodes 
* Go over each node and sort the list of ancestors as per the problem statement

**Swift**
```swift
class Solution {
  func getAncestors(_ n: Int, _ edges: [[Int]]) -> [[Int]] {
    var graph = [Int: [Int]]()
    var inDegree = Array(repeating: 0, count: n)
    for edge in edges {
      let (u, v) = (edge[0], edge[1])
      graph[u, default: []].append(v)
      inDegree[v] += 1
    }
    
    var ancestors = Array(repeating: Set<Int>(), count: n)
    var stack = [Int]()
    for u in 0..<n where inDegree[u] == 0 {
      stack.append(u)
    }
    
    while !stack.isEmpty {
      let u = stack.removeLast()
      for v in graph[u, default: []] {
        inDegree[v] -= 1 
        if inDegree[v] == 0 {
          stack.append(v)
        }
          
        ancestors[v].insert(u)
        ancestors[v].formUnion(ancestors[u])
      }
    }
    
    var res = [[Int]]()
    for u in 0..<n {
      res.append(ancestors[u].sorted())
    }
    
    return res
  }
}
```