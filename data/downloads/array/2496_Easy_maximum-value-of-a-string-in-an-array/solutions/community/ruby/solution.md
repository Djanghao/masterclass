# Ruby one-liner, beats 100%/100%

**Author:** DNNX
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/2901175/](https://leetcode.com/problems/maximum-value-of-a-string-in-an-array/solutions/2901175/)

---

```
# @param {String[]} strs
# @return {Integer}
def maximum_value(strs)
  strs.map { _1.match?(/[a-z]/) ? _1.size : _1.to_i }.max  
end
```