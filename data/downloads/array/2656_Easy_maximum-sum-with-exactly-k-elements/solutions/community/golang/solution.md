# Python/Go | Easy Solution✅

**Author:** gmanayath
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/3488552/](https://leetcode.com/problems/maximum-sum-with-exactly-k-elements/solutions/3488552/)

---

# Python \u2705
```
class Solution:
    def maximizeSum(self, nums: List[int], k: int) -> int:
        sums = max(nums)
        for i in range(sums+1,sums+k):
            sums += i
        return sums

```
# Go \u2705
```
import (
   "sort"
)
func maximizeSum(nums []int, k int) int {
   sort.Ints(nums)
   sum := nums[len(nums)-1]
   start := sum+1
   last := sum+k
   for start<last{
       sum += start
       start++
   }
   return sum
}

```