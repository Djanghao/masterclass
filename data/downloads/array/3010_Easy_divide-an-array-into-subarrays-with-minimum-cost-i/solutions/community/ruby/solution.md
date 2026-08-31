# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/5174239/](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i/solutions/5174239/)

---


# Code
```
# @param {Integer[]} nums
# @return {Integer}
def minimum_cost(nums)
    cost = nums[0]
    nums[1..-1].sort[0..1].sum + cost
end
```