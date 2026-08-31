# 1 Liner Erlang

**Author:** CainTheMeister
**Votes:** 0
**Link:** [https://leetcode.com/problems/factorial-trailing-zeroes/solutions/3697709/](https://leetcode.com/problems/factorial-trailing-zeroes/solutions/3697709/)

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
trailing_zeroes(N) -> if N < 5 -> 0; true -> N div 5 + trailing_zeroes(N div 5) end.

```