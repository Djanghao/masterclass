# One pass

**Author:** 0x81
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/3420441/](https://leetcode.com/problems/find-the-score-of-all-prefixes-of-an-array/solutions/3420441/)

---

```ruby
def find_prefix_score a
    s = m = 0
    a.map do
        m = _1 if _1 > m
        s += _1 + m
    end
end
```