# Ruby solution. 1-line

**Author:** guswhitten
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/3176451/](https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/3176451/)

---

```
# @param {String[]} words
# @param {String} s
# @return {Integer}
def count_prefixes(words, s)
    words.count { |word| s.start_with?(word) }
end
```