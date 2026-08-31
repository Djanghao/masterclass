# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solutions/3599658/](https://leetcode.com/problems/convert-integer-to-the-sum-of-two-no-zero-integers/solutions/3599658/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def getNoZeroIntegers(n: Int): Array[Int] = {
      def hasZero(num: Int): Boolean = num.toString.contains("0")
      val a = (1 until n).find(i => !hasZero(i) && !hasZero(n - i)).get
      Array(a, n - a)
    }
}
```