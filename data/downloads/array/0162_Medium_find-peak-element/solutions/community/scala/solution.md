# [scala] Binary search beats 100%

**Author:** VOSID8
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-peak-element/solutions/5942062/](https://leetcode.com/problems/find-peak-element/solutions/5942062/)

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
```scala []
object Solution {
    def findPeakElement(nums: Array[Int]): Int = {
        if(nums.length == 1) return 0

        def helper(left: Int, right: Int, base: Array[Int]): Int = {
            val mid = left + (right-left)/2 
            if(mid == 0) return 1
            else if(left > right) left
            else if(base(mid) > base(mid-1) && base(mid) > base(mid+1)) mid
            else if(base(mid) < base(mid-1)) helper(left, mid-1, base)
            else helper(mid+1, right, base)
        }
        val modi = Int.MinValue +: nums :+ Int.MinValue
        helper(0, modi.length - 1, modi) - 1
    }
}
```