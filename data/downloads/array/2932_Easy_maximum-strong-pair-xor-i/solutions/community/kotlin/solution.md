# Kotlin Brute Force Approach

**Author:** curenosm
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-strong-pair-xor-i/solutions/5359283/](https://leetcode.com/problems/maximum-strong-pair-xor-i/solutions/5359283/)

---

# Code
```
class Solution {
    fun maximumStrongPairXor(nums: IntArray): Int {
        var max = Int.MIN_VALUE
        
        for (i in 0 until nums.size) {
            for (j in 0 until nums.size) {
                val (x, y) = arrayOf(nums[i], nums[j])
                if (abs(x - y) <= min(x, y) && x xor y > max)
                    max = x xor y
            }
        }

        return max;
    }
}
```