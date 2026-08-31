# Simplest possible ruby solution

**Author:** gabehblack
**Votes:** 2
**Link:** [https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/3355698/](https://leetcode.com/problems/intersection-of-multiple-arrays/solutions/3355698/)

---

```
# @param {Integer[][]} nums
# @return {Integer[]}
def intersection(nums)
  nums.reduce(:&).sort
end
```