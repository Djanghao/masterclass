# Solution by Kotlin

**Author:** ancastlenguyen
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-on-array-to-maximize-sum-of-squares/solutions/4880085/](https://leetcode.com/problems/apply-operations-on-array-to-maximize-sum-of-squares/solutions/4880085/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun maxSum(nums: List<Int>, k: Int): Int {
        
    val count = Array<Int>(32){0}
    var res: Long = 0
    var cur: Long = 0
    var mod: Long = 1000000007
    for (a in nums){
        for (i in 0 until 32 step  1){
            if ((a and  (1.shl(i))) != 0){
                count[i]++
            }
        }
    }
    for (j in 0 until k step 1){
        cur = 0
        for (i in 0 until 32 step 1){
            if (count[i] > 0){
                count[i]--
                cur += 1.shl(i)
            }
        }
        res = (res + cur * cur % mod) %mod
    }
    return res.toInt()
    }
}
```