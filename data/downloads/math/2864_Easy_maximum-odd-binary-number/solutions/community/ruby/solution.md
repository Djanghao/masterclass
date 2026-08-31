# Ruby one-liner

**Author:** DNNX
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-odd-binary-number/solutions/4123211/](https://leetcode.com/problems/maximum-odd-binary-number/solutions/4123211/)

---

```
# @param {String} s
# @return {String}
def maximum_odd_binary_number(s)
  s.chars.sort.reverse.rotate.join
end
```