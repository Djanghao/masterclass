# Straightforward Ruby solution.

**Author:** user9697N
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/628653/](https://leetcode.com/problems/largest-number-at-least-twice-of-others/solutions/628653/)

---

```Ruby
=begin
Leetcode: 747. Largest Number At Least Twice of Others.
https://leetcode.com/problems/largest-number-at-least-twice-of-others/
Runtime: 28 ms, faster than 91.11% of Ruby online submissions for Largest Number At Least Twice of Others.
Memory Usage: 9.7 MB, less than 100.00% of Ruby online submissions for Largest Number At Least Twice of Others.
=end
# @param {Integer[]} nums
# @return {Integer}
def dominant_index(nums)
    return 0 if nums.size < 2
    max = nums.max
    index = nums.index(max)
    pre_max = nums.select{|x| x != max}.max
    pre_max * 2 <= max ? index : - 1 
end
```