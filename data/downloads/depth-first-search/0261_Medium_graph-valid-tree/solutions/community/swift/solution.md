# Swift Easy to Understand DFS Solution

**Author:** iCodeForExcellence
**Votes:** 2
**Link:** [https://leetcode.com/problems/graph-valid-tree/solutions/996831/](https://leetcode.com/problems/graph-valid-tree/solutions/996831/)

---

```
class Solution {
    func validTree(_ n: Int, _ edges: [[Int]]) -> Bool {
        
        //base check
        if(edges.count != n - 1) {
            return false
        }
        
        var adjcencyList = [[Int]]()
        for i in 0..<n {
            adjcencyList.append([])
        }
        
        for edge in edges {
            adjcencyList[edge[0]].append(edge[1])
            adjcencyList[edge[1]].append(edge[0])
        }
        
        var visited = Set<Int>()
        
        //check for cycle and all pieces connected.
        return dfsHelper(0,-1,&visited,adjcencyList) && visited.count == n
        
    }
    
    func dfsHelper(_ node:Int, _ parent:Int, _ visited:inout Set<Int>, _ adjcencyList:[[Int]]) ->Bool{
        if(visited.contains(node)) {
            return false
        }
        visited.insert(node)
        for neighbor in adjcencyList[node] {
            if parent != neighbor {
                let result = dfsHelper(neighbor,node,&visited,adjcencyList)
                if(result != true) {
                    return false
                }
            }
        }
        return true
    }
}
```