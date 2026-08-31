# Swift

**Author:** OrchidHunter
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-if-path-exists-in-graph/solutions/2929486/](https://leetcode.com/problems/find-if-path-exists-in-graph/solutions/2929486/)

---

**BFS (accepted answer)**
```
class Solution {
    func validPath(_ n: Int, _ edges: [[Int]], _ source: Int, _ destination: Int) -> Bool {
        let graph = edges.reduce(into: [Int:[Int]]()) { graph, edge in
            graph[edge[0], default:[]].append(edge[1])
            graph[edge[1], default:[]].append(edge[0])
        }
        var bfs = [source], visited = Set(bfs)
        while !bfs.isEmpty && !visited.contains(destination) {
            bfs = bfs.flatMap{graph[$0]!.filter{!visited.contains($0)}}
            visited.formUnion(bfs)
        }
        return !bfs.isEmpty
    }
}
```

---

Alternatively, we could use an 2-D Array as backing store for `graph` instead of Hashmap of Arrays, this code will be about as fast:
```
let graph = edges.reduce(into: Array(repeating:[Int](), count:n)) { graph, edge in
	(0...1).forEach { i in graph[edge[i]].append(edge[i^1]) }
}
```

---

\u26A0\uFE0F -Alternatively, we could use Hashmap of Sets as backing store for `graph`, and the code is tighter, but the `Set` logic will double the execution time unfortunately.

```
class Solution {
    func validPath(_ n: Int, _ edges: [[Int]], _ source: Int, _ destination: Int) -> Bool {
        let graph = edges.reduce(into: [Int:Set<Int>]()) { graph, edge in
            graph[edge[0], default:[]].insert(edge[1])
            graph[edge[1], default:[]].insert(edge[0])
        }
        var bfs = [source], visited = Set(bfs)
        while !bfs.isEmpty && !visited.contains(destination) {
            bfs = bfs.flatMap{graph[$0]!.subtracting(visited)} // \uD83D\uDEAB slow!! use `.{filter{!visited.contains($0)}}` instead
            visited.formUnion(bfs)
        }
        return !bfs.isEmpty
    }
}
```