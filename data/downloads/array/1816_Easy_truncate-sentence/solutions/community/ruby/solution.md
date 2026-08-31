# Ruby: Split, slice, join.

**Author:** user9697N
**Votes:** 2
**Link:** [https://leetcode.com/problems/truncate-sentence/solutions/1148862/](https://leetcode.com/problems/truncate-sentence/solutions/1148862/)

---

## Leetcode: 1816. Truncate Sentence.

**Ruby: Split, slice, join.**

Split string into an array by space bars, get first k elements by the Ruby slice syntax, and join that array into a string by space bar as a glue.   



Ruby code:
```Ruby
# Leetcode: 1816. Truncate Sentence.
# https://leetcode.com/problems/truncate-sentence/
# Runtime: 56 ms, faster than 65.22% of Ruby online submissions for Truncate Sentence.
# Memory Usage: 209.7 MB, less than 86.96% of Ruby online submissions for Truncate Sentence.
# Thanks God!
# @param {String} s
# @param {Integer} k
# @return {String}
def truncate_sentence(s, k)
    s.split()[0...k].join(" ")
end
```