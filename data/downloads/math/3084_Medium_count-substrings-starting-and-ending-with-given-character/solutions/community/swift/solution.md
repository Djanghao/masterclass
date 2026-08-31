# ✅ Laconic Optimal Solution

**Author:** eleev
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/solutions/4922524/](https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/solutions/4922524/)

---

# Solution
```swift
final class Solution {
    @_optimize(speed)
    func countSubstrings(_ s: String, _ c: Character) -> Int {
        let entries = s.filter { $0 == c }.count
        return (entries * (entries + 1)) >> 1
    }
}
```