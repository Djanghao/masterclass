# [Golang] Sorting + Single pass

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-groups-with-increasing-length/solutions/3805188/](https://leetcode.com/problems/maximum-number-of-groups-with-increasing-length/solutions/3805188/)

---

# Code
```
func maxIncreasingGroups(usageLimits []int) int {
  var res int
  sort.Ints(usageLimits)
  extra := 0
  for i := 0; i < len(usageLimits); i++ {
    if extra+usageLimits[i] > res {
      res++
      needed := res
      if extra >= needed {
        extra -= needed
        extra += usageLimits[i]
      } else {
        needed -= extra
        extra = usageLimits[i] - needed
      }
    } else {
      extra += usageLimits[i]
    }
  }
  return res
}
```