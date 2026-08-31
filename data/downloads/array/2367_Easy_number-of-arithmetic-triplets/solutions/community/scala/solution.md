# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/3433631/](https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/3433631/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^3)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def arithmeticTriplets(nums: Array[Int], diff: Int): Int = {
      var count = 0
      for (i <- 0 until nums.length - 2) 
        for (j <- i+1 until nums.length - 1) 
          if (nums(j) - nums(i) == diff) 
            for (k <- j+1 until nums.length) 
              if (nums(k) - nums(j) == diff) count += 1
      count 
    }
}
```