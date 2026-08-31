# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/map-of-highest-peak/solutions/3273832/](https://leetcode.com/problems/map-of-highest-peak/solutions/3273832/)

---

```
class Solution {
    func highestPeak(_ isWater: [[Int]]) -> [[Int]] {
        
        var res = Array(repeating: Array(repeating: -1, count: isWater.first!.count), count: isWater.count)
        var i = 0
        var stack = Set(
            (0..<isWater.count)
                .flatMap { x in (0..<isWater[x].count).map { [x, $0] } }
                .filter { isWater[$0[0]][$0[1]] == 1 }
        )
        
        while !stack.isEmpty {
            var new = Set<[Int]>()

            for p in stack where res[p[0]][p[1]] == -1 {
                res[p[0]][p[1]] = i
                [[p[0] - 1, p[1]], [p[0] + 1, p[1]], [p[0], p[1] - 1], [p[0], p[1] + 1]]
                    .filter { (p: [Int]) -> Bool in
                        p[0] >= 0 && p[0] < res.count && p[1] >= 0 && p[1] < res[p[0]].count && res[p[0]][p[1]] == -1
                    }
                    .forEach { new.insert($0) }
            }

            stack = new
            i += 1
        }

        return res
    }
}
```