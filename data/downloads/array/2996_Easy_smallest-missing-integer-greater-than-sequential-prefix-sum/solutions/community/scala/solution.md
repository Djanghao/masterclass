# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/4793777/](https://leetcode.com/problems/smallest-missing-integer-greater-than-sequential-prefix-sum/solutions/4793777/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def missingInteger(nums: Array[Int]): Int = {
      val set = nums.toSet
      val sum = nums.head + nums.zipWithIndex.tail.takeWhile(t => t._1 == (nums(t._2 - 1) + 1)).map(_._1).sum

      LazyList.from(sum).find(!set.contains(_)).getOrElse(sum)
    }
}
```