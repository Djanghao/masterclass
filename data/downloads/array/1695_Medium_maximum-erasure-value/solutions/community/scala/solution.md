# Simple Sliding Window Approach || Scala

**Author:** abhi_84
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-erasure-value/solutions/5223808/](https://leetcode.com/problems/maximum-erasure-value/solutions/5223808/)

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
object Solution {
    def maximumUniqueSubarray(nums: Array[Int]): Int = {
        var i = 0
        var mp = scala.collection.mutable.Map[Int, Int]().withDefaultValue(0)
        var sum = 0
        var maxi = 0
        for(j <- 0 until nums.length) {
            sum += nums(j)
            mp(nums(j)) += 1
            while(mp(nums(j)) > 1) {
                mp(nums(i)) -= 1
                sum -= nums(i)
                i += 1
            }

            maxi = Math.max(maxi, sum)
        }

        maxi
    }
}
```