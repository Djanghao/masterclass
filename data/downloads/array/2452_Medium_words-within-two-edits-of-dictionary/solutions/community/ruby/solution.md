# Declarative, beautiful and slow Ruby one-liner

**Author:** DNNX
**Votes:** 0
**Link:** [https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/2801421/](https://leetcode.com/problems/words-within-two-edits-of-dictionary/solutions/2801421/)

---

```
# @param {String[]} queries
# @param {String[]} dictionary
# @return {String[]}
def two_edit_words(queries, dictionary)
  queries.filter { |q| dictionary.any? { |w| w.bytes.zip(q.bytes).count { _1 != _2 } <= 2 } }
end
```