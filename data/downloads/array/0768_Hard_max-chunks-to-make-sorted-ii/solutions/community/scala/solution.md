# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/max-chunks-to-make-sorted-ii/solutions/3560798/](https://leetcode.com/problems/max-chunks-to-make-sorted-ii/solutions/3560798/)

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
    def maxChunksToSorted(arr: Array[Int]): Int = {
      val min = new Array[Int](arr.length)
      min(arr.length - 1) = arr(arr.length - 1)
      for (i <- arr.length - 2 to 0 by -1) min(i) = math.min(min(i + 1), arr(i))
      var max = arr(0)
      var ans = 0
      for (i <- 1 until arr.length)
        if (max <= min(i)) {
          ans += 1
          max = arr(i)
        } else max = math.max(arr(i), max)
      ans += 1
      ans
    }
}
```