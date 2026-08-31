# ruby 1-liner

**Author:** _-k-
**Votes:** 3
**Link:** [https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/3129712/](https://leetcode.com/problems/verifying-an-alien-dictionary/solutions/3129712/)

---

```
def is_alien_sorted(words, order) =

  words==words.sort_by{_1.tr order, 'a-z'}
```