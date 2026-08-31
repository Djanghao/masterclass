# Ruby one-liner

**Author:** DNNX
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-original-typed-string-i/solutions/5987011/](https://leetcode.com/problems/find-the-original-typed-string-i/solutions/5987011/)

---

```ruby []
# @param {String} word
# @return {Integer}
def possible_string_count(word)
  word.size - word.chars.chunk(&:itself).count + 1 
end
```