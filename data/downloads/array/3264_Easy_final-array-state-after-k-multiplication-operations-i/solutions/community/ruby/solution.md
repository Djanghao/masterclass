# Recursive Ruby

**Author:** alanparmenter
**Votes:** 0
**Link:** [https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/solutions/5810181/](https://leetcode.com/problems/final-array-state-after-k-multiplication-operations-i/solutions/5810181/)

---

# Code
```ruby []
# @param {Integer[]} nums
# @param {Integer} k
# @param {Integer} multiplier
# @return {Integer[]}
def get_final_state(nums, k, multiplier)
    return nums if k == 0
    nums[nums.index(nums.min)] *= multiplier
    get_final_state(nums, k - 1, multiplier)
end
```