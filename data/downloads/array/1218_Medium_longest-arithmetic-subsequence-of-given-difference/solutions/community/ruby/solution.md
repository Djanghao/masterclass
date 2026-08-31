# Ruby 4 lines DP solution

**Author:** koujiokada
**Votes:** 2
**Link:** [https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/3761433/](https://leetcode.com/problems/longest-arithmetic-subsequence-of-given-difference/solutions/3761433/)

---

```
def longest_subsequence(arr, difference)
  counts = Hash.new(0)
  arr.reduce(0) {|max_size, num|
    [max_size, counts[num] = counts[num-difference] + 1].max
  }
end
```