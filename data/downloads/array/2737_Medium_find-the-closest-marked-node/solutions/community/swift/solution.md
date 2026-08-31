# Dijkstra's in Swift

**Author:** djpropah
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-closest-marked-node/solutions/6052353/](https://leetcode.com/problems/find-the-closest-marked-node/solutions/6052353/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Create minPaths using Dijkstra and search for min to a marked node

# Code
```swift []
class Solution {
    func minimumDistance(_ n: Int, _ edges: [[Int]], _ s: Int, _ marked: [Int]) -> Int {
        var paths = [[Int:Int]](repeating:[Int:Int](), count: n)
        var q: [(Int,Int)] = []
        var visited:Set<Int> = []
        var minPaths = [Int32](repeating:Int32.max, count:n)

        for edge in edges {
            let startNode = edge[0], endNode = edge[1], weight = edge[2]
            paths[startNode][endNode] = min(weight, paths[startNode][endNode] ?? Int.max)
        }
        q.append((0,s))
        minPaths[s] = 0
        var res = Int32.max
        while let currNode = q.first {
            q.removeFirst()
            for (adjNode, weight) in paths[currNode.1] {
                let newDist = minPaths[currNode.1] + Int32(weight)
                if newDist < minPaths[adjNode] {
                    minPaths[adjNode] = newDist
                    q.append((Int(newDist), adjNode))
                }
            }
            q = q.sorted { $0.0 < $1.0 }
        }

        for mark in marked {
            res = min(res, minPaths[mark])
        }
        return Int(res == Int32.max ? -1 : res)
    }
}
```