# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-of-connectable-servers-in-a-weighted-tree-network/solutions/5417943/](https://leetcode.com/problems/count-pairs-of-connectable-servers-in-a-weighted-tree-network/solutions/5417943/)

---

```
class Solution {
    func countPairsOfConnectableServers(_ edges: [[Int]], _ signalSpeed: Int) -> [Int] {
        
        let edges = edges.reduce(into: Array(repeating: [[Int]](), count: edges.count + 1)) {
            $0[$1[0]].append([$1[1], $1[2]])
            $0[$1[1]].append([$1[0], $1[2]])
        }

        func asroot(_ root: Int) -> Int {

            var children = [Int]()
            for child in edges[root] {
                var reachable = 0
                func visit(_ node: Int, _ parent: Int, _ signal: Int) {
                    if signal % signalSpeed == 0 { reachable += 1 }
                    for child in edges[node] where child[0] != parent { visit(child[0], node, signal + child[1]) }
                }
                visit(child[0], root, child[1])
                children.append(reachable)
            }

            var res = 0
            for i in 0..<children.count {
                for j in 1 + i..<children.count {
                    res += children[i] * children[j]
                }
            }

            return res
        }

        return edges.indices.map(asroot)
    }
}
```