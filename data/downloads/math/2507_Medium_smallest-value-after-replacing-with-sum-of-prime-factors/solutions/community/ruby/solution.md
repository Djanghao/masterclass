# Using 'prime' gem

**Author:** gnemot
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/solutions/5596333/](https://leetcode.com/problems/smallest-value-after-replacing-with-sum-of-prime-factors/solutions/5596333/)

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
require 'prime'

def prime_factors_sum(n)
  Prime.prime_division(n).sum { _1[0] * _1[1] }
end

def smallest_value(n)
  n = prime_factors_sum(n) while n != prime_factors_sum(n)
  n
end
```