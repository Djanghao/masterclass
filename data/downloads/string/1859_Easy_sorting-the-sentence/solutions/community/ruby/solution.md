# [Ruby] One-liner

**Author:** mistersky
**Votes:** 3
**Link:** [https://leetcode.com/problems/sorting-the-sentence/solutions/1210266/](https://leetcode.com/problems/sorting-the-sentence/solutions/1210266/)

---

```
def sort_sentence(s)
  s.split.sort_by{|word| word[-1]}.map{|word| word[0...-1]}.join(' ')
end
```