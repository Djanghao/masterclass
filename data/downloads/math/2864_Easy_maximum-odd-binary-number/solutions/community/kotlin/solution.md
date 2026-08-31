# Kotlin. 1-line solution.

**Author:** ramanchik
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-odd-binary-number/solutions/4803547/](https://leetcode.com/problems/maximum-odd-binary-number/solutions/4803547/)

---

# Code
```
class Solution {
    fun maximumOddBinaryNumber(s: String) = s.count{it=='1'}.let{ "1".repeat(it-1) + "0".repeat(s.length-it) + "1" }
}
```