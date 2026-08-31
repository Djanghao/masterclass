# Swift

**Author:** OrchidHunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/solutions/5081177/](https://leetcode.com/problems/check-if-string-is-decomposable-into-value-equal-substrings/solutions/5081177/)

---

**Basic One Pass (accepted answer)**
```
class Solution {
    func isDecomposable(_ s: String) -> Bool {
        var count = 1, sawPair = false
        for (c,d) in zip(s,s.dropFirst()) {
            if c != d || count == 3 {
                guard (!sawPair || count != 2) && count != 1 else { return false }
                sawPair = sawPair || count == 2
                count = 0
            }
            count += 1
        }
        return count == 2 + (sawPair ? 1:0)
    }
}
```