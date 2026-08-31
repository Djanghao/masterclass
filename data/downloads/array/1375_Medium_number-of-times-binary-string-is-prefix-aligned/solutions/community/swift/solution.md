# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/solutions/3239274/](https://leetcode.com/problems/number-of-times-binary-string-is-prefix-aligned/solutions/3239274/)

---

```
class Solution {
    func numTimesAllBlue(_ flips: [Int]) -> Int {

        var m = Array(repeating: 0, count: flips.count)
        var s = 0
        var res = 0

        for i in flips.indices {
            if m[i] == 1 { s += 1 }
            m[flips[i] - 1] = 1
            if flips[i] - 1 <= i { s += 1 }
            if s == i + 1 { res += 1 }
        }

        return res
    }
}
```