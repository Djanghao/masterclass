# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/solutions/3267539/](https://leetcode.com/problems/prime-number-of-set-bits-in-binary-representation/solutions/3267539/)

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
    def countPrimeSetBits(left: Int, right: Int): Int = {
        val primes = List(2,3,5,7,11,13,17,19,23,27,29,31)
        (left to right).map(_.toBinaryString.count(_ == '1')).count(primes.contains(_))
    }
}
```