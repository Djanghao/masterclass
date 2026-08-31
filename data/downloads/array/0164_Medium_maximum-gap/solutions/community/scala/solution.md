# i am the best dev.. scala

**Author:** user8349be
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-gap/solutions/5776232/](https://leetcode.com/problems/maximum-gap/solutions/5776232/)

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
    def maximumGap(nums: Array[Int]): Int = {
        if (nums.length <= 1) return 0 // f the array contains less than two elements, return 0.
        val _nums =nums.sorted
        // so i am the best hhhhhhhhhhhhh
        var max_gap = 0
        for (i <-1 until _nums.length )
        {
            if (_nums(i)- _nums(i-1) > max_gap){
                max_gap = _nums(i)- _nums(i-1)
            }
        }
        return max_gap
    }
}
```