# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-to-base-2/solutions/4771396/](https://leetcode.com/problems/convert-to-base-2/solutions/4771396/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(log n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def baseNeg2(n: Int): String = {
      if (n == 0) "0"
      else {
        def loop(num: Int, acc: String): String =
          if (num == 0) acc
          else {
            val rem = num % 2
            loop(num/ -2 + (if (rem < 0) 1 else 0), if (rem < 0) (rem + 2).toString + acc else rem.toString + acc)
          }
        loop(n, "")
      }
    }
}
```