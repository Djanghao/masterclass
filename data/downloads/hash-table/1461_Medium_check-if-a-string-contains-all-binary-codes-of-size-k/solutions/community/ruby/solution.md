# [Ruby] One-liner

**Author:** mistersky
**Votes:** 2
**Link:** [https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/1105861/](https://leetcode.com/problems/check-if-a-string-contains-all-binary-codes-of-size-k/solutions/1105861/)

---

```
# @param {String} s
# @param {Integer} k
# @return {Boolean}
def has_all_codes(s, k)
  (s.length - k + 1).times.map{|i| s[i...i + k]}.uniq.count == 2**k
end
```