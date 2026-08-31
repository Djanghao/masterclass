# [Ruby] One-liner

**Author:** mistersky
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-binary-substrings/solutions/1172619/](https://leetcode.com/problems/count-binary-substrings/solutions/1172619/)

---

```
# @param {String} s
# @return {Integer}
def count_binary_substrings(s)
  s.scan(/0+|1+/).map(&:length).each_cons(2).sum(&:min)
end
```