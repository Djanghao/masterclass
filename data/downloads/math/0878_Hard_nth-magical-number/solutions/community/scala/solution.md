# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/nth-magical-number/solutions/3612536/](https://leetcode.com/problems/nth-magical-number/solutions/3612536/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(log(n)*log(m))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def nthMagicalNumber(n: Int, a: Int, b: Int): Int = {
        val mod = 1000000007L
        val A = a.toLong
        val B = b.toLong
        var left = math.min(A, B)
        var right = n.toLong * math.min(A, B)
        var tmpA = A
        var tmpB = B
        while (tmpB > 0) {
          val tmp = tmpA
          tmpA = tmpB
          tmpB = tmp % tmpB
        }
        val gcd = tmpA
        val lcm = A * B / gcd
        while (left < right) {
          val m = left + (right - left) / 2
          if (m / A + m / B - m / lcm < n) left = m + 1
          else right = m
        }
        (left % mod).toInt
    }
}
```