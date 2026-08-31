# Scala iterative solution with while loop

**Author:** anton_leet
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-index-with-equal-value/solutions/4759463/](https://leetcode.com/problems/smallest-index-with-equal-value/solutions/4759463/)

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
    def smallestEqual(nums: Array[Int]): Int = {
        var i = 0
        while (i < nums.size && i % 10 != nums(i)) i+=1
        if (i == nums.size) -1 else i
    }
}
```