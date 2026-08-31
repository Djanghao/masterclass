# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/broken-calculator/solutions/3431406/](https://leetcode.com/problems/broken-calculator/solutions/3431406/)

---

```
class Solution {
    func brokenCalc(_ startValue: Int, _ target: Int) -> Int {
        
        guard target > startValue else { return startValue - target }

        var cur = target
        var res = 0

        while cur > startValue {
            if cur % 2 == 1 {
                cur += 1
                res += 1
            }
            cur /= 2
            res += 1
        }

        return res + startValue - cur
    }
}
```