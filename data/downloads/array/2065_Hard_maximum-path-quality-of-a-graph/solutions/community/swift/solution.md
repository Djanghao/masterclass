# Swift DFS

**Author:** mudejar
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-path-quality-of-a-graph/solutions/4881510/](https://leetcode.com/problems/maximum-path-quality-of-a-graph/solutions/4881510/)

---

# Code
```
class Solution {
    var res = 0
    var map = [Int: [Int: Int]]()
    var values = [Int]()

    func maximalPathQuality(_ values: [Int], _ edges: [[Int]], _ maxTime: Int) -> Int {
        for e in edges {
            let (a, b, c) = (e[0], e[1], e[2])
            map[a] = map[a] ?? [:]
            map[a]![b] = c
            map[b] = map[b] ?? [:]
            map[b]![a] = c
        }
        self.values = values
        dfs(0, Set([0]), values[0], maxTime)
        return res
    }

    func dfs(_ node: Int, _ visited: Set<Int>, _ gain: Int, _ cost: Int) {
        if cost < 0 { return }
        if node == 0 { res = max(res, gain) }
        for (nextNode, nextCost) in map[node] ?? [:] {
            let nextGain = gain + (visited.contains(nextNode) ? 0 : values[nextNode])
            dfs(nextNode, visited.union([nextNode]), nextGain, cost - nextCost)
        }
    }
}

```