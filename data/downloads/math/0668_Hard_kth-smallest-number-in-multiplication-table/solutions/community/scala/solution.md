# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/solutions/3769554/](https://leetcode.com/problems/kth-smallest-number-in-multiplication-table/solutions/3769554/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach Recursive Binary search
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(m * log(m * n))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def findKthNumber(m: Int, n: Int, k: Int): Int = {
      def binarySearch(left: Int, right: Int): Int =
        if (left >= right) left
        else {
          val mid = left + (right - left) / 2
          if ((1 to m).map(i => math.min(mid / i, n)).sum >= k) binarySearch(left, mid)
          else binarySearch(mid + 1, right)
        }

      binarySearch(1, m * n)
    }
}
```

# Approach Binary search
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(m * log(m * n))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def findKthNumber(m: Int, n: Int, k: Int): Int = {
      var left = 1
      var right = m * n

      while (left < right) {
        val mid = left + (right - left) / 2
        var count = 0
        for (i <- 1 to m) count += math.min(mid / i, n)
        if (count >= k) right = mid
        else left = mid + 1
      }
      left
    }
}
```