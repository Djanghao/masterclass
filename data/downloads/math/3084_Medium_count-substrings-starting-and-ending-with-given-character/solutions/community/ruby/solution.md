# Simple solution

**Author:** ifelsethenthat
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/solutions/4886705/](https://leetcode.com/problems/count-substrings-starting-and-ending-with-given-character/solutions/4886705/)

---

```
def count_substrings(s, c)
    count = s.count(c)
    count * (count + 1) / 2
end
```