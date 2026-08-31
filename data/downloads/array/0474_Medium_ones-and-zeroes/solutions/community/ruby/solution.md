# Ruby dp solution

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/ones-and-zeroes/solutions/5625515/](https://leetcode.com/problems/ones-and-zeroes/solutions/5625515/)

---


# Code
```
# @param {String[]} strs
# @param {Integer} m
# @param {Integer} n
# @return {Integer}
def find_max_form(strs, m, n)
  strs.inject(Array.new(m + 1){ Array.new(n + 1,0) }) { |dp, s|
    c0, c1 = s.count(?0), s.count(?1)
    m.downto(0).inject(dp){ |dp, i|
      n.downto(0).each_with_object(dp){ |j, dp| 
        dp[i][j] = (1 + dp[i - c0][j - c1]) if c0 <= i && c1 <= j && (1 + dp[i - c0][j - c1]) > dp[i][j] } }
  }[-1][-1]    
end
```