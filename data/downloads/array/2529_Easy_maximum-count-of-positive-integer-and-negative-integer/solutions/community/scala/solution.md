# Scala solutions

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/4755942/](https://leetcode.com/problems/maximum-count-of-positive-integer-and-negative-integer/solutions/4755942/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach: recursive binary search
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(log n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
      def maximumCount(nums: Array[Int]): Int = {
        def binarySearch(low: Int, high: Int, tar: Int): Int =
          if (low >= high) low
          else {
            val mid = low + (high - low) / 2
            if (nums(mid) < tar) binarySearch(mid + 1, high, tar)
            else binarySearch(low, mid, tar)
          }

        math.max(binarySearch(0, nums.length, 0), nums.length - binarySearch(0, nums.length, 1))
      }
}
```


# Approach: binary search
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
      def maximumCount(nums: Array[Int]): Int = {
        def binarySearch(low: Int, high: Int, tar: Int): Int = {
          var left = low
          var right = high
          while (left < right) {
            val mid = left + (right - left) / 2
            if (nums(mid) < tar) left = mid + 1
            else right = mid
          }
          left
        }

        math.max(binarySearch(0, nums.length, 0), nums.length - binarySearch(0, nums.length, 1))
      }
}
```

# Approach: functional
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
      def maximumCount(nums: Array[Int]): Int = {
        val len = nums.length
        if (nums(0) == 0 && nums(len-1) == 0) 0
        else (nums.indexWhere(_ > 0), nums.lastIndexWhere(_ < 0)) match {
            case (-1, neg) => neg + 1
            case (pos, neg) => math.max(neg + 1, len - pos)
        }
      }        
}
```