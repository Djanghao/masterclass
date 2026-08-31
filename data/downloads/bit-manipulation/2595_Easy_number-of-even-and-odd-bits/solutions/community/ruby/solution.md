# Simple Ruby Solution(one liner)

**Author:** remy727
**Votes:** 1
**Link:** [https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/3319939/](https://leetcode.com/problems/number-of-even-and-odd-bits/solutions/3319939/)

---

# Code
```
# Runtime 89 ms, Beats 100%
# Memory 210.9 MB, Beats 100%
# @param {Integer} n
# @return {Integer[]}
def even_odd_bit(n)
  [(n & 341).digits(2).count(1), (n & 682).digits(2).count(1)]
end
```