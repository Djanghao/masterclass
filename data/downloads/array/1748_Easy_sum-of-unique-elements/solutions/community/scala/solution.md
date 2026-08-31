# One liner code in Scala .

**Author:** HARSHIDAS_21
**Votes:** 0
**Link:** [https://leetcode.com/problems/sum-of-unique-elements/solutions/5073106/](https://leetcode.com/problems/sum-of-unique-elements/solutions/5073106/)

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
    def sumOfUnique(nums: Array[Int]): Int = {
        nums.groupBy(identity).view.mapValues(_.size).collect{ case (key,value)   if   value == 1 => key}.sum
    }
}
```