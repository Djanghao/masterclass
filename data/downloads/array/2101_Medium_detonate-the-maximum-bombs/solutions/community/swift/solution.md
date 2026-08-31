# ✅ [Solution][Swift] DFS

**Author:** adanilyak
**Votes:** 2
**Link:** [https://leetcode.com/problems/detonate-the-maximum-bombs/solutions/3589357/](https://leetcode.com/problems/detonate-the-maximum-bombs/solutions/3589357/)

---

**TC:** O(n * n)
**SC:** O(n * n)
```
class Solution {
    func maximumDetonation(_ bombs: [[Int]]) -> Int {
        func check(
            point: (x: Int, y: Int),
            isInside circle: (x: Int, y: Int, r: Int)
        ) -> Bool {
            let distance = sqrt(
                pow(Double(point.x - circle.x), 2.0) + pow(Double(point.y - circle.y), 2.0)
            )
            return Double(circle.r) >= distance
        }

        let n = bombs.count
        var map = [Int: [Int]]()
        var result = 1

        for i in 0..<n {
            map[i] = []
            for j in 0..<n where j != i {
                guard check(point: (bombs[j][0], bombs[j][1]), isInside: (bombs[i][0], bombs[i][1], bombs[i][2])) 
                else { continue }
                map[i]?.append(j)
            }
        }

        for i in 0..<n {
            var used = Set<Int>()
            var current = Set<Int>([i])
            while !current.isEmpty {
                let node = current.removeFirst()
                used.insert(node)
                for adj in map[node]! where !used.contains(adj) {
                    current.insert(adj)
                }
            }

            result = max(result, used.count)
        }

        return result
    }
}
```