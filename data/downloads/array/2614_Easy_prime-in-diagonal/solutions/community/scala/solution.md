# Scala solution

**Author:** malovig
**Votes:** 0
**Link:** [https://leetcode.com/problems/prime-in-diagonal/solutions/3545363/](https://leetcode.com/problems/prime-in-diagonal/solutions/3545363/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n^2)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
object Solution {
    def diagonalPrime(nums: Array[Array[Int]]): Int = {
      def isPrime(n: Int): Boolean = 
        if (n <= 1) false
        else if (n == 2 || n == 3) true
        else if (n % 2 == 0 || n % 3 == 0) false
        else {
          var i = 5
          var w = 2
          while (i * i <= n) {
            if (n % i == 0) return false
            i += w
            w = 6 - w
          }
          true
        }
      (nums.indices.map(m => nums(m)(m)) ++ nums.indices.map(m => nums(m)(nums.length - m - 1)))
        .distinct
        .filter(isPrime)
        .reduceOption(_ max _)
        .getOrElse(0)
    }
}
```