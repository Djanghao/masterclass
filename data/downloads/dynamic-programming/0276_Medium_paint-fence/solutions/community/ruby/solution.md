# Ruby DP solution

**Author:** divyad25
**Votes:** 0
**Link:** [https://leetcode.com/problems/paint-fence/solutions/446446/](https://leetcode.com/problems/paint-fence/solutions/446446/)

---

```
def num_ways(n, k)
  return 0 if n == 0 || k == 0
  return k if n == 1
  same, diff = [], []
  same[0] = same[1] = k
  diff[0], diff[1] = k, k*(k-1)
  (2...n).each { |i|
    same[i] = diff[i-1]
    diff[i] = (same[i-1] + diff[i-1]) * (k-1)
  }
  same[n-1] + diff[n-1]
end
```