# prefix sum + greedy O(n) Ruby

**Author:** dmtrr
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimize-maximum-of-array/solutions/3381303/](https://leetcode.com/problems/minimize-maximum-of-array/solutions/3381303/)

---

# Approach
Prefix sum + greedy

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def minimize_array_value(nums)
  prefix = 0
  result = 0
  nums.each_with_index do |num, i|
    prefix += nums[i]
    result = [result, (prefix.to_f/(i+1)).ceil].max
  end
  result
end
```