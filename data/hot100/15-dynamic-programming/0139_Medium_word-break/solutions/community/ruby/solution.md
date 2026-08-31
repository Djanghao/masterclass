# Simplest solution with memoization (9 lines)

**Author:** galaxytab
**Votes:** 2
**Link:** [https://leetcode.com/problems/word-break/solutions/4054540/](https://leetcode.com/problems/word-break/solutions/4054540/)

---

# Intuition
The only trick is to memorize the result for a substring and not recompute it multiple times. The rest is straightforward:

- grab a word w from the dictionary
- if s starts with w, remove it from the beginning of s and call the method recursively
- once we have an empty s, we return true

# Code
```
def word_break(s, dict)
    memo = {}
    solver = -> (s) do
        return true if s.empty?
        return memo[s] unless memo[s].nil?
        memo[s] = dict.any? { |w| s.start_with?(w) && solver.(s[w.size..-1]) }
    end
    solver.(s)
end
```