# Ruby 5-lines simple solution RT Beats 100%

**Author:** alobzov
**Votes:** 1
**Link:** [https://leetcode.com/problems/nth-digit/solutions/5409380/](https://leetcode.com/problems/nth-digit/solutions/5409380/)

---

# Code
```
# @param {Integer} n
# @return {Integer}
def find_nth_digit(n, sz = 1, p = 1)
  while true
    d = 9 * sz * p
    return ((n - 1) / sz + p).to_s[(n - 1) % sz].to_i if n <= d
    n -= d and sz += 1 and p *= 10
  end    
end
```