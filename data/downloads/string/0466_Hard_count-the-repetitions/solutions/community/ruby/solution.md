# Ruby solution RT Beats 100%

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-the-repetitions/solutions/5601481/](https://leetcode.com/problems/count-the-repetitions/solutions/5601481/)

---

# Code
```
# @param {String} s1
# @param {Integer} n1
# @param {String} s2
# @param {Integer} n2
# @return {Integer}
def get_max_repetitions(s1, n1, s2, n2, dp = [])
  s2.size.times do |i|
    start, count = i, 0
    s1.size.times do |j|
      next if s1[j] != s2[start]
      start += 1
      start, count = 0, count + 1 if start == s2.length
    end
    dp << [start, count]
  end

  n1.times.inject([0, 0]) { |(total, idx), _| [total + dp[idx][1], dp[idx][0]] }.first / n2
end

```