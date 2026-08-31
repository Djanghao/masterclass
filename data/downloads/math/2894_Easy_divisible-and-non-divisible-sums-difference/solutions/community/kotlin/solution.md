# Kotlin Ranges Reduction Solution

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/5354192/](https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/5354192/)

---

# Code
```
class Solution {
    fun differenceOfSums(n: Int, m: Int): Int {
        val num1 = (1..n).filter { it % m != 0 }.sum()
        val num2 = (1..n).filter { it % m == 0 }.sum()
        return num1 - num2
    }
}
```