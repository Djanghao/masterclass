# Ruby version with thought process

**Author:** nullptr0x00
**Votes:** 6
**Link:** [https://leetcode.com/problems/regular-expression-matching/solutions/231360/](https://leetcode.com/problems/regular-expression-matching/solutions/231360/)

---

Recursive version, e.g. given (str, "c\\*a\\*b")
  - it's the same as (str, "a\\*b") if "a\\*b" can still match str (e.g. "aab" "ab")
  - it's the same as (str[1..-1], "c\\*a\\*b") if the first character is 'c' or '.' (e.g. "ccab" ".ab")
  ...
  - otherwise just check if both first character matches and recursively call on their tails
  - when to stop: if there is no more pattern to match, str should also be empty

``` ruby
def is_match(s, p)
  return s.empty? if p.empty?
  first = !s.empty? && [s[0], '.'].include?(p[0])
  if p[1] == '*'
    is_match(s, p[2..-1]) || (first && is_match(s[1..-1], p))
  else
    first && is_match(s[1..-1], p[1..-1])
  end
end
```

Now how to optimize this? Let's first use indices instead of slicing strings, the runtime is the same
``` ruby
def is_match_a(i, j, s, p)
  return i == s.length if j == p.length
  first = i < s.length && [s[i], '.'].include?(p[j])
  if p[j+1] == '*'
    is_match(i, j+2, s, p) || (first && is_match(i+1, j, s, p))
  else
    first && is_match(i+1, j+1, s, p)
  end
end
```

``` ruby
At last, we can use DP instead of recursion, with some optimization
def is_match(s, p)
  s = s.bytes
  p= p.bytes
  dp = Array.new(s.length+1) { Array.new(p.length+1, false) }
  m, n = s.length, p.length
  dp[m][n] = true
  m.downto(0) do |i| 
    (n-1).downto(0) do |j| 
      first = i < m && (s[i] == p[j] || p[j] == 46)
      if p[j+1] == 42
        dp[i][j] = dp[i][j+2] || (first && dp[i+1][j])
      else
        dp[i][j] = first && dp[i+1][j+1]
      end
    end
  end
  dp[0][0]
end
```
