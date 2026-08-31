# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-impossible-or/solutions/3319374/](https://leetcode.com/problems/minimum-impossible-or/solutions/3319374/)

---

```
class Solution {
    func minImpossibleOR(_ nums: [Int]) -> Int {

        let ns = nums.sorted()
        var res = 1
        var i = 0

        while true {
            while i < ns.count, ns[i] != res { i += 1 }
            guard i < ns.count else { break }
            res *= 2
        }

        return res
    }
}
```