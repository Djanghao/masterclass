# Ruby, Tally, Sum

**Author:** kahtava
**Votes:** 1
**Link:** [https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/solutions/5290091/](https://leetcode.com/problems/substrings-that-begin-and-end-with-the-same-letter/solutions/5290091/)

---

# Code
```
def number_of_substrings(s)
  s.chars.tally.values.sum { |v| v * (v + 1) / 2 }
end
```