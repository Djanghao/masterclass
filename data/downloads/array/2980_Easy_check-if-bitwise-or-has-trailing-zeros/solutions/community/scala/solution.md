# just an example

**Author:** igormsc
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/4482194/](https://leetcode.com/problems/check-if-bitwise-or-has-trailing-zeros/solutions/4482194/)

---

# Code
```
object Solution {
    def hasTrailingZeros(nums: Array[Int]): Boolean = nums.map(n=>(n+1)%2).sum > 1
}
```