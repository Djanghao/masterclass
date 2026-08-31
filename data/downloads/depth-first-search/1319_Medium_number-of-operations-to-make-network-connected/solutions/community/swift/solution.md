# Swift Easy To Understand Beats 100%  - O(m+n)

**Author:** iCodeForExcellence
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-operations-to-make-network-connected/solutions/1121458/](https://leetcode.com/problems/number-of-operations-to-make-network-connected/solutions/1121458/)

---

```
func makeConnected(_ n: Int, _ connections: [[Int]]) -> Int {
        // To connect all nodes need at least n-1 edges
        if (connections.count < n - 1) {return -1}
        var graph = Array(repeating:[Int](), count:n) 
        for connection in connections {
            graph[connection[0]].append(connection[1])
            graph[connection[1]].append(connection[0])
        }
        var components = 0
        var visited = Set<Int>()
        for i in 0..<n {
            if(visited.insert(i).inserted) {
                dfsHelper(i, graph,&visited)
                components += 1
            }
        }
        // Need (components-1) cables to connect components together
        return components - 1
        
    }
    
    
    func dfsHelper(_ node:Int, _ graph:[[Int]], _ visited:inout Set<Int>) {
        for neighbor in graph[node] {
            if(visited.insert(neighbor).inserted) {
                dfsHelper(neighbor, graph,&visited)
            }
        }
    }
