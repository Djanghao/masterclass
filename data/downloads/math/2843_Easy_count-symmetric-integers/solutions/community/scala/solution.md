# Scala oneliner

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-symmetric-integers/solutions/4752153/](https://leetcode.com/problems/count-symmetric-integers/solutions/4752153/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def countSymmetricIntegers(low: Int, high: Int): Int = {
      (low to high).count(c=> c.toString.length % 2 == 0 && c.toString.take(c.toString.length/2).map(_.asDigit).sum == c.toString.takeRight(c.toString.length/2).map(_.asDigit).sum)
    }
}
```