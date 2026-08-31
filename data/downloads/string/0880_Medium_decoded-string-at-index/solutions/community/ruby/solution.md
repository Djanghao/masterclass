# [Ruby] O(n) time, O(1) space

**Author:** mistersky
**Votes:** 1
**Link:** [https://leetcode.com/problems/decoded-string-at-index/solutions/978989/](https://leetcode.com/problems/decoded-string-at-index/solutions/978989/)

---

```
# @param {String} s
# @param {Integer} k
# @return {String}
def decode_at_index(s, k)
  length = 0
  s.chars.each do |char|
    length = char =~ /\\d/ ? length*char.to_i : length + 1
    next if k <= length
  end
  
  s.reverse.each_char do |char|
    if char =~ /\\d/
      length /= char.to_i
      k %= length
    else
      return char if k == length || k == 0
      length -= 1
    end
  end
end
```