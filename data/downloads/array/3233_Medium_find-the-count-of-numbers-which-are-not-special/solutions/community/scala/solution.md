# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-count-of-numbers-which-are-not-special/solutions/5605863/](https://leetcode.com/problems/find-the-count-of-numbers-which-are-not-special/solutions/5605863/)

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
  def isPrime(n: Int): Boolean = !(2 to Math.sqrt(n).toInt).exists(n % _ == 0)
  val primes = LazyList.from(2).filter(isPrime).takeWhile(_ <= 32000).toSet
  def nonSpecialCount(l: Int, r: Int): Int = 
    r - l + 1 - primes.count(p => {
      val square = p * p
      square >= l && square <= r
    })

}
```