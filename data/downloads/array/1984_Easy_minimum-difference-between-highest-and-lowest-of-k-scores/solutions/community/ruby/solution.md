# one liner, sort + sliding window

**Author:** 7fffffff
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/3574457/](https://leetcode.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/solutions/3574457/)

---

# Code
```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def minimum_difference(nums, k)
  return nums.sort.each_cons(k).map{|s| s.last-s.first}.min
end

```