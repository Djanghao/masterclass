# Ruby, Two Lines

**Author:** kahtava
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/solutions/5158674/](https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/solutions/5158674/)

---

# Code
```
def is_valid(s)
  s.gsub!('abc', '') while s.index('abc')
  s.length.zero?
end
```