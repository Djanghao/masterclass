# [Swift] DFS & BFS Solution

**Author:** alptekin35
**Votes:** 2
**Link:** [https://leetcode.com/problems/possible-bipartition/solutions/521743/](https://leetcode.com/problems/possible-bipartition/solutions/521743/)

---

```
class Solution {
    func possibleBipartition(_ N: Int, _ dislikes: [[Int]]) -> Bool {
        var graph:[[Int]] = []
        for i in 0..<N{
            graph.append([])
        }
        for i in dislikes{
            let from = i[0]-1
            let to = i[1]-1
            graph[from].append(to)
            graph[to].append(from)
        }
        var visited = Array(repeating: 0, count: graph.count)
        for i in 0..<N{
            if 0 == visited[i]{
                //let res = dfs(i ,graph, &visited)
                let res = bfs(i ,graph, &visited)
                if !res{
                    return false
                }
            }
        }
        return true
    }
    
    func bfs(_ node:Int, _ graph:[[Int]], _ visited:inout[Int])->Bool{
        var queue:[Int] = []
        queue.append(node)
        visited[node] = 1

        while !queue.isEmpty{
            let item = queue.removeFirst()
            for child in graph[item]{
                if visited[child] == 0{
                    visited[child] = visited[item] == 1 ? 2 : 1
                    queue.append(child)
                }else{
                    if visited[child] == visited[item] { return false }
                }
            }
        }
        return true
    }
    
    func dfs(_ node:Int, _ graph:[[Int]], _ visited:inout[Int],_ parent:Int? = nil)->Bool{
        if parent == nil {
            visited[node] = 1
        }
        for child in graph[node]{
            if visited[child] == 0{
                visited[child] = visited[node] == 1 ? 2 : 1
                if !dfs(child, graph, &visited, node){
                    return false
                }
            }else{
                if visited[child] == visited[node] { return false }
            }
        }
        return true
    }
}
```