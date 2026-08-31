# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/integer-replacement/solutions/3911917/](https://leetcode.com/problems/integer-replacement/solutions/3911917/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach functional
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n log n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def integerReplacement(n: Int): Int = {
      @scala.annotation.tailrec
      def loop(num: Long, count: Int): Int = {
        if (num == 1) count
        else if (num % 2 == 0) loop(num / 2, count + 1)
        else if ((num - 1) % 4 == 0 || num == 3) loop(num - 1, count + 1)
        else loop(num + 1, count + 1)
      }
      
      loop(n.toLong, 0)
    }
}
```
# Approach dp

# Complexity
- Time complexity: O(n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def integerReplacement(n: Int): Int = {
      var count = 0
      var num = n.toLong
      while (num > 1) {
        if (num % 2 == 0) num /= 2
        else if ((num - 1) % 4 == 0 || num == 3) num -= 1
        else num += 1
        count += 1
      }
      count
    }
}
```