# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/solutions/3508689/](https://leetcode.com/problems/make-costs-of-paths-equal-in-a-binary-tree/solutions/3508689/)

---

```
class Solution {
    func minIncrements(_ n: Int, _ cost: [Int]) -> Int {
        
        var cost = cost
        var len = 0
        var res = 0

        func find(_ m: Int = 1, _ c: Int = 0) {
            let leaf = 2 * m > n
            let nc = c + cost[m - 1]

            if leaf {
                len = max(len, nc)
            }
            else {
                find(m * 2, nc)
                find(m * 2 + 1, nc)
            }
        }

        func adjust(_ m: Int = 1, _ c: Int = 0) -> [Int] {
            let leaf = 2 * m > n
            let nc = c + cost[m - 1]

            if leaf {
                return [nc, nc]
            }
            else {
                let r1 = adjust(m * 2, nc)
                let r2 = adjust(m * 2 + 1, nc)
                let r = [min(r1[0], r2[0]), max(r1[1], r2[1])]
                res += r[1] - r[0]
                return [r[1], r[1]]
            }
        }

        find()
        adjust()

        return res
    }
}
```