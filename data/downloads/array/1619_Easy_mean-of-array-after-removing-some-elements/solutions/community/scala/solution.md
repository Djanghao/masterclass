# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/3623357/](https://leetcode.com/problems/mean-of-array-after-removing-some-elements/solutions/3623357/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n log n),
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def trimMean(arr: Array[Int]): Double = {
      val n = arr.length
      val toRemove = (n * 0.05).toInt
      val trimmedArr = arr.sorted.slice(toRemove, n - toRemove)
      trimmedArr.sum.toDouble / trimmedArr.length
    }
}
```