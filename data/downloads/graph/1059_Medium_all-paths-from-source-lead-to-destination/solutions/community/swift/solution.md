# Swift DFS Solution

**Author:** iCodeForExcellence
**Votes:** 1
**Link:** [https://leetcode.com/problems/all-paths-from-source-lead-to-destination/solutions/999273/](https://leetcode.com/problems/all-paths-from-source-lead-to-destination/solutions/999273/)

---

```
class Solution {
    func leadsToDestination(_ n: Int, _ edges: [[Int]], _ source: Int, _ destination: Int) -> Bool {
        //base checks
        
        var adjencenyList = Array(repeating:[Int](),count:n)
        for edge in edges {
            adjencenyList[edge[0]].append(edge[1])
        }
        var visited = Array(repeating:0,count:n)
        
        if(adjencenyList[destination].count != 0) {
            return false
        }
        return dfsHelper(source,destination,&visited, adjencenyList)
        
    }
    
    
    func dfsHelper(_ start:Int, _ destination:Int, _ visited:inout [Int], _ adjacencyList: [[Int]]) ->Bool {
        if(start == destination) {
            return true
        }

        
        if(adjacencyList[start].count == 0) {
            return false
        }
        
        visited[start] = 1
        
    
        for neighbor in adjacencyList[start] {
            if(visited[neighbor] == 1) {
                return false
            }
            if(!dfsHelper(neighbor,destination,&visited, adjacencyList)) {
                return false
            }
        }
        visited[start] = 0
        return true

    }
    

}
```