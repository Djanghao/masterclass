# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/4268175/](https://leetcode.com/problems/count-number-of-homogenous-substrings/solutions/4268175/)

---

```
class Solution {
    func countHomogenous(_ s: String) -> Int {
        
        var prev: Character?
        var len = 0
        var res = 0

        for c in s {
            if prev == c {
                len += 1
            }
            else  {
                res = (res + (0...len).reduce(0, +)) % 1000000007
                prev = c
                len = 1
            }
        }

        res = (res + (0...len).reduce(0, +)) % 1000000007

        return res
    }
}
```