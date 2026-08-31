# Ruby 1-line solution

**Author:** alobzov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/5562303/](https://leetcode.com/problems/maximum-number-of-pairs-in-array/solutions/5562303/)

---

# Code
```
# @param {Integer[]} nums
# @return {Integer[]}
def number_of_pairs(nums, v = nums.tally.values) =
  [v.filter_map{ _1 - _1 % 2 if _1 > 1 }.sum / 2, v.select(&:odd?).count]
```