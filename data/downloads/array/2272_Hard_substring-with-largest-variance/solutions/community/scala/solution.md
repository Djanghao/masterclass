# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/substring-with-largest-variance/solutions/3739591/](https://leetcode.com/problems/substring-with-largest-variance/solutions/3739591/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach - Kadane's algo
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def largestVariance(s: String): Int = {
       def kadane(letter1: Char, letter2: Char, string: String): Int = {
          var res = 0
          var cur1 = 0
          var cur2 = 0
          var flag1 = true
          var flag2 = true

          for (i <- string) {
            cur1 += (if (i == letter1) 1 else 0) - (if (i == letter2) 1 else 0)
            flag1 &= (i != letter2)
            if (cur1 < 0) {
              cur1 = 0
              flag1 = true
            }

            cur2 += (if (i == letter2) 1 else 0) - (if (i == letter1) 1 else 0)
            flag2 &= (i != letter1)
            if (cur2 < 0) {
              cur2 = 0
              flag2 = true
            }
            res = List(res, cur1 - (if (flag1) 1 else 0), cur2 - (if (flag2) 1 else 0)).max
          }
          res
        }

        if (s.toSet.size <= 1) 0
        else {
          val letters = s.toSet.toList
          (for {
            i <- 0 until letters.length - 1
            j <- i + 1 until letters.length
          } yield kadane(letters(i), letters(j), s.filter(c => c == letters(i) || c == letters(j)))).max
        }
    }
}
```