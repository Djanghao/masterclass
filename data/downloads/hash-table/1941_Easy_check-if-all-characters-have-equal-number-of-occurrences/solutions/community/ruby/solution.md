# ✅ Ruby 1 Line Simple Solution

**Author:** bikashnit09
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/solutions/2491304/](https://leetcode.com/problems/check-if-all-characters-have-equal-number-of-occurrences/solutions/2491304/)

---

```
def are_occurrences_equal(s)
    s.chars.tally.values.uniq.size == 1
end
```