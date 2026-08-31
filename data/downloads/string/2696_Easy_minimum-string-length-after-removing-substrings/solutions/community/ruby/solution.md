# 2 lines

**Author:** caovanbi235
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/5879701/](https://leetcode.com/problems/minimum-string-length-after-removing-substrings/solutions/5879701/)

---

# Code
```ruby []
# @param {String} s
# @return {Integer}
def min_length(s)
  s = s.gsub('AB', '').gsub('CD', '') while s.include?('AB') || s.include?('CD')
  s.size
end

```