# Kotlin

**Author:** kotlinc
**Votes:** 0
**Link:** [https://leetcode.com/problems/power-of-heroes/solutions/3520904/](https://leetcode.com/problems/power-of-heroes/solutions/3520904/)

---

# Code
```
class Solution {
  val MOD = 1_000_000_007L
  fun sumOfPower(nums: IntArray): Int {
    nums.sort()
    var sum_of_min = 0L
    var res = 0L
    for (num in nums) {
      val max = (num.toLong() * num.toLong()) % MOD
      val my_sum_of_min = (sum_of_min + num) % MOD
      res = (res + max * my_sum_of_min) % MOD
      sum_of_min = (sum_of_min + my_sum_of_min) % MOD
    }
    return res.toInt()
  }
}
```