# scala one line solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/solutions/3111485/](https://leetcode.com/problems/count-number-of-distinct-integers-after-reverse-operations/solutions/3111485/)

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
    def countDistinctIntegers(nums: Array[Int]): Int = {
        (nums ++ nums.map(_.toString.reverse.toInt)).toSet.size
    }
}
```