# Ruby | Tally + Reduce + Sum

**Author:** sparlaimor
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/solutions/4890348/](https://leetcode.com/problems/minimum-deletions-to-make-string-k-special/solutions/4890348/)

---

# Code
```
# @param {String} word
# @param {Integer} k
# @return {Integer}
def minimum_deletions(word, k)
  freq = word.each_byte.tally.values

  freq.reduce(word.size) do |acc, min|
    [
      acc,
      freq.sum { |num| num < min ? num : (num - min - k).clamp(0..) }
    ].min
  end
end
```