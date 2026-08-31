# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-alternating-subarray/solutions/3740108/](https://leetcode.com/problems/longest-alternating-subarray/solutions/3740108/)

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
    def alternatingSubarray(nums: Array[Int]): Int = {
        val n = nums.length
        def f(res: Int, i: Int, j: Int):Int = {
            if(i == n) return res
            if(j < n && nums(j) == (nums(i) + (j - i) % 2)) f(res max (j - i + 1), i, j + 1)
            else f(res, i + 1, i + 2)
        }

        val res = f(0, 0, 1)
        if(res > 1) res else - 1

    }
}
```