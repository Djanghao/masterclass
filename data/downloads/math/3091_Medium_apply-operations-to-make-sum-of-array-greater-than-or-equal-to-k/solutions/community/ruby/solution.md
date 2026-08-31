# Ruby 100% Math | Readable/Longer | Fast

**Author:** bindles
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/4918112/](https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/4918112/)

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
# @param {Integer} k
# @return {Integer}
def min_operations(k)
  sqrt_k = Math.sqrt(k)
  ceiling_sqrt_k = sqrt_k.ceil
  operations_performed = k / ceiling_sqrt_k
  subtract = k % ceiling_sqrt_k == 0 ? 1 : 0

  ceiling_sqrt_k - 1 + operations_performed - subtract
end
```