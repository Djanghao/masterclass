# Simple 1-liner [Ruby]

**Author:** KellyBundy
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/1043850/](https://leetcode.com/problems/maximum-number-of-balls-in-a-box/solutions/1043850/)

---

```
def count_balls(low_limit, high_limit)
  (low_limit..high_limit).map { |i| i.digits.sum }.tally.values.max
end
```