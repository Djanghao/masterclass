# scala solution

**Author:** lyk4411
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-people-aware-of-a-secret/solutions/3548648/](https://leetcode.com/problems/number-of-people-aware-of-a-secret/solutions/3548648/)

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
  def peopleAwareOfSecret(n: Int, delay: Int, forget: Int): Int = {
    val mod = 1000000007
    val f = Array.fill(n + 1)(0)
    f(1) = 1
    for(i <- 2 to n){
      f(i) = f(i - 1)
      f(i) = (f(i) + (if(i >= delay) f(i - delay) else 0)) % mod
      f(i) = (f(i) - (if(i >= forget)  f(i - forget) else 0)) % mod
    }
    ((f(n) - f(n - forget)) % mod + mod) % mod
  }
}
```