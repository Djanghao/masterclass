# ✅ Scala: using Set

**Author:** aaabramov
**Votes:** 0
**Link:** [https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/3440391/](https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/3440391/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```scala
object Solution {
  def findFinalValue(nums: Array[Int], original: Int): Int = {
    val set = nums.toSet

    var n = original
    while (set.contains(n)) {
      n *= 2
    }

    n
  }
}
```