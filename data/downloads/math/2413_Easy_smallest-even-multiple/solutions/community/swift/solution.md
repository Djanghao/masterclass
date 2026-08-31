# Swift bit manipulation one-liner solution

**Author:** tgeisse
**Votes:** 4
**Link:** [https://leetcode.com/problems/smallest-even-multiple/solutions/3028396/](https://leetcode.com/problems/smallest-even-multiple/solutions/3028396/)

---

# Code
```
class Solution {
    func smallestEvenMultiple(_ n: Int) -> Int {
        n & 1 == 0 ? n : n << 1
    }
}
```