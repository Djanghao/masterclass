# 1 Liner Scala Solution using FoldLeft

**Author:** vtiwari227
**Votes:** 2
**Link:** [https://leetcode.com/problems/reverse-words-in-a-string-iii/solutions/1877773/](https://leetcode.com/problems/reverse-words-in-a-string-iii/solutions/1877773/)

---

```
s.split(" ").foldLeft("")( (result, currentValue) => result ++ " " ++ currentValue.reverse).trim
```