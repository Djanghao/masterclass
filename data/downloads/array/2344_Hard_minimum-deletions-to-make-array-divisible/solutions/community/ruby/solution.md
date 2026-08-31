# ruby 1-liner

**Author:** _-k-
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/solutions/5216718/](https://leetcode.com/problems/minimum-deletions-to-make-array-divisible/solutions/5216718/)

---

```
def min_operations(nums, nums_divide) =

  nums_divide.reduce(&:gcd).then{|g| nums.sort.index{ g%_1<1 } or -1 }
```