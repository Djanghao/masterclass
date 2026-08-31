# Ruby 1-line RT Beats 100%

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/integer-replacement/solutions/5405635/](https://leetcode.com/problems/integer-replacement/solutions/5405635/)

---

# Code
```
# @param {Integer} n
# @return {Integer}
def integer_replacement(n)
  n >= 1 && n <= 3 ? n - 1 : n % 2 == 0 ? 1 + integer_replacement(n / 2) : [1 + integer_replacement(n + 1), 1 + integer_replacement(n - 1)].min     
end
```