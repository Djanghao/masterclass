# Scala Code

**Author:** abhi_84
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-subarrays-with-fixed-bounds/solutions/5213440/](https://leetcode.com/problems/count-subarrays-with-fixed-bounds/solutions/5213440/)

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
    def countSubarrays(nums: Array[Int], minK: Int, maxK: Int): Long = {
        var c = -1
        var ma = -1
        var mi = -1
        var ans: Long = 0L

        for(i <- 0 until nums.length){
            if(nums(i) == minK) mi = i
            if(nums(i) == maxK) ma = i
            if(nums(i) > maxK || nums(i) < minK) c = i

            val temp = Math.min(ma, mi) - c
            if(temp > 0) ans += temp
        }

        ans
    }
}

```