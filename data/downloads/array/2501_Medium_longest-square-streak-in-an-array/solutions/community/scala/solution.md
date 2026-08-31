# scala easy solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-square-streak-in-an-array/solutions/3394038/](https://leetcode.com/problems/longest-square-streak-in-an-array/solutions/3394038/)

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
    def longestSquareStreak(nums: Array[Int]): Int = {
        val res = nums.sorted.reverse.foldLeft(Map[Int, Int]())((acc, cur)=>{
            acc + (cur -> (acc.getOrElse(cur * cur, 0)  + 1))
        }).values.max
        if(res == 1) -1 else res
    }
}
```