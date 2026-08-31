# Easy Kotlin Solution

**Author:** lilyx998
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/solutions/3956586/](https://leetcode.com/problems/maximal-range-that-each-element-is-maximum-in-it/solutions/3956586/)

---

# Intuition
Use deque to maintain a descending monotonic sequence.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

  fun maximumLengthOfRanges(nums: IntArray): IntArray {
    val N = nums.size
    val res = IntArray(N)
    val q = java.util.ArrayDeque<Int>()
    for (i in nums.indices) {
      while (q.isNotEmpty() && nums[q.peekLast()] < nums[i]) {
        val out = q.pollLast()
        res[out] += i - 1 - out
      }
      res[i] += if (q.isEmpty()) i + 1 else i - q.peekLast()
      q.offerLast(i)
    }
    while (q.isNotEmpty()) {
      val out = q.pollLast()
      res[out] += N - 1 - out
    }
    return res
  }

}
```