# Easy one-liner

**Author:** jordan_lee
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/3850804/](https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/3850804/)

---

# Complexity
- Time complexity: O(n log n) for sorting
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def minimumDifference(nums: Array[Int], k: Int): Int = {
        nums.sorted.reverse.sliding(k).map(arr => arr.head-arr.last).min
    }
}
```