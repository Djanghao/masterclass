# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/nth-digit/solutions/3587179/](https://leetcode.com/problems/nth-digit/solutions/3587179/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def findNthDigit(n: Int): Int = {
      def loop(A: Long, i: Int): Long = 
        if ((A + math.pow(10, i) - 1) * 10 <= n) loop(((A + math.pow(10, i) - 1) * 10).toLong, i + 1)
        else {
          val log = math.log10(A).toInt
          (((n - A) / (log + 1) + math.pow(10, log)) / math.pow(10, log - (n - A) % (log + 1)).toInt % 10).toLong
        }
      
      loop(1, 0).toInt
    }
}
```