# Ruby prefix sum solution, easy to understand

**Author:** kamilpuchala
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/4968136/](https://leetcode.com/problems/minimum-value-to-get-positive-step-by-step-sum/solutions/4968136/)

---

1. We need to set prefix sum for an array
2. select min value from prefixed sum
3. Return 1 if selected value > 0 or find difference between min and 1

```
# @param {Integer[]} nums
# @return {Integer}
def min_start_value(nums)
   prefixed = [nums[0]]
   nums.each_with_index do |num, index|
        next if index.zero?
        nums[index] = num + nums[index - 1]
   end
    min = nums.min
    min > 0 ? 1 : (min - 1).abs
end


```