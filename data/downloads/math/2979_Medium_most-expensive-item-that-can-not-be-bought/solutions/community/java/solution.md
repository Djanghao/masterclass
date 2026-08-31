# Number Theory Solution | Java | Beats 100%

**Author:** Narasimhaarun07
**Votes:** 1
**Link:** [https://leetcode.com/problems/most-expensive-item-that-can-not-be-bought/solutions/5768448/](https://leetcode.com/problems/most-expensive-item-that-can-not-be-bought/solutions/5768448/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is related to the Frobenius Coin Problem, which seeks to determine the largest value that cannot be expressed as a non-negative linear combination of two distinct coin denominations (prime numbers in this case). The largest such value for two coprime numbers 

g(a,b)=a\xD7b\u2212a\u2212b

This formula is derived from number theory and applies only when the two numbers are coprime, which is guaranteed because the input is two distinct prime numbers (primes are always coprime with each other).

# Approach
<!-- Describe your approach to solving the problem. -->
g(a,b)=a\xD7b\u2212a\u2212b

# Complexity
- Time complexity: O(1)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    public int mostExpensiveItem(int primeOne, int primeTwo) {
        return (primeOne * primeTwo) - primeOne - primeTwo; 
    }
}
```