# easiest solution, 1 line, interpolation

**Author:** AlexDashko1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/4727108/](https://leetcode.com/problems/check-if-the-number-is-fascinating/solutions/4727108/)

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
# @param {Integer} n
# @return {Boolean}
def is_fascinating(n)
  "#{n}#{n*2}#{n*3}".split('').sort == [*'1'..'9']
end
```