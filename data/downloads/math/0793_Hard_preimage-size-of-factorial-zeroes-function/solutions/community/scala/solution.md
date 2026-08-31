# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/solutions/3701323/](https://leetcode.com/problems/preimage-size-of-factorial-zeroes-function/solutions/3701323/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach Binary search
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(log n + log k)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(log n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def preimageSizeFZF(k: Int): Int = {
        def getZero(n: Long, divisor: Long, count: Int): Int = 
          if (n / divisor <= 0) count
          else getZero(n, divisor * 5, count + (n / divisor).toInt)

        def binarySearch(start: Long, end: Long): Int =
          if (start >= end) 0
          else {
            val mid = start + (end - start) / 2
            val zeros = getZero(mid, 5L, 0)
            if (zeros == k) 5
            else if (zeros > k) binarySearch(start, mid - 1)
            else binarySearch(mid + 1, end)
          }

        binarySearch(0L, 10L * k + 1L)
    }
}
```