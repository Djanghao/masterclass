# One-liner regex Runtime 81ms Beats100.00% Memory 215.55MB Beats66.67%

**Author:** amnesia10
**Votes:** 0
**Link:** [https://leetcode.com/problems/license-key-formatting/solutions/5574011/](https://leetcode.com/problems/license-key-formatting/solutions/5574011/)

---


# Code
```
# @param {String} s
# @param {Integer} k
# @return {String}
def license_key_formatting(s, k)
  s.upcase.delete("-").reverse.scan(/.{1,#{k}}/).join("-").reverse
end

# s = s.delete('-').upcase
# l = s.length
# fgl = l % k == 0 ? k : l % k
# res = s[0...fgl]
# i = fgl
# (i...l).step(k) do |j|
#     res += '-' + s[j, k]
# end
# res
```