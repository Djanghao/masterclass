# [Ruby] One-liner

**Author:** mistersky
**Votes:** 2
**Link:** [https://leetcode.com/problems/letter-case-permutation/solutions/1069400/](https://leetcode.com/problems/letter-case-permutation/solutions/1069400/)

---

```
# @param {String} s
# @return {String[]}
def letter_case_permutation(s)
  [''].product(*s.chars.map{|c| [c.downcase, c.upcase].uniq}).map(&:join)
end
```