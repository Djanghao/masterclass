# Ruby one-liner

**Author:** rmuntani
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/solutions/5609343/](https://leetcode.com/problems/minimum-number-of-steps-to-make-two-strings-anagram-ii/solutions/5609343/)

---

# Code
```
# @param {String} s
# @param {String} t
# @return {Integer}
def min_steps(s, t)
   s.chars.tally.merge(t.chars.tally) { |_,v1,v2| (v1-v2).abs }.sum { |_,v| v }
end
```