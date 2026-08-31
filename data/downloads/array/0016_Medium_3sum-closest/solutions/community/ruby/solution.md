# 3sum approach used

**Author:** amkumar0301
**Votes:** 0
**Link:** [https://leetcode.com/problems/3sum-closest/solutions/5302013/](https://leetcode.com/problems/3sum-closest/solutions/5302013/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
3 pointer solution, following the approach followed in 3sum, move the pointer to reach the target. If unable to reach the target keeping the best possible solution.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def three_sum_closest(nums, target)
    length = nums.length
    nums = nums.sort
    closest_sum = nums[length - 1] + nums[length - 2] + nums[length - 3]
    
    diff = (target - closest_sum).abs
    (0...length - 2).each do |i|
        left = i + 1
        right = length - 1
        while(left < right) do
            sum = nums[i] + nums[left] + nums[right]
            return target if sum == target

            current_diff = (target - sum).abs
            sum <= target ? left += 1 : right -= 1
            if current_diff < diff
                diff = current_diff
                closest_sum = sum
            end
        end
    end
    closest_sum
end
```