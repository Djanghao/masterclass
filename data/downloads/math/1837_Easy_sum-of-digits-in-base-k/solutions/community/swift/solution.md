# Swift, existing functions, one-liner

**Author:** alekskosylo
**Votes:** 2
**Link:** [https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/2947181/](https://leetcode.com/problems/sum-of-digits-in-base-k/solutions/2947181/)

---

# Code
```
class Solution {
    func sumBase(_ n: Int, _ k: Int) -> Int {
        return String(n, radix: k).compactMap { c in Int(String(c)) }.reduce(0, +)
    }
}
```