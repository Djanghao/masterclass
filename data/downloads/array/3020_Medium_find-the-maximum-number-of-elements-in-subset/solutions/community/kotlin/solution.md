# Kotlin count

**Author:** aliam
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/solutions/4638897/](https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/solutions/4638897/)

---

# Intuition
Convert IntArray to DoubleArray for accurate values when using sqrt().

Count the frequency of all elements in nums.

Iterate through nums:

Consider each num as highest. While square root exists, increment res by 2 and keep, square root the new element. Continue this until no further values found. 

Set res accordingly.

when nums == 1 (1.0), this is a special case. Res will be number of ones, rounded down to nearest odd number. So if count of ones is 10, we round to 9, if 312, we round to 311, etc.

# Code
```
class Solution {
    fun maximumLength(nums: IntArray): Int {
        val nums = nums.map { it.toDouble() }
        val count = HashMap<Double, Int>()

        for (n in nums)
            count[n] = (count[n] ?: 0) + 1
        
        var res = 1
        for (n in nums) {
            if (n == 1.0) {
                if ((count[n] ?: 0) % 2 == 0)
                    count[n] = (count[n] ?: 0) - 1
                res = maxOf(res, (count[n] ?: 0))
                continue
            }

            var cur = 1
            var next = sqrt(n)
            while ((count[next] ?: 0) >= 2) {
                cur += 2
                next = sqrt(next)
            }
            
            res = maxOf(res, cur)
        }

        return res
    }
}
```