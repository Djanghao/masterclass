# Scala solution using partition

**Author:** anjanchakraborty
**Votes:** 0
**Link:** [https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/6019251/](https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/solutions/6019251/)

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
```scala []
object Solution {
    def differenceOfSums(n: Int, m: Int): Int = {
       val (divisible, nonDivisible) = (1 to n).partition(_%m==0)
       nonDivisible.sum - divisible.sum 
    }
}
```