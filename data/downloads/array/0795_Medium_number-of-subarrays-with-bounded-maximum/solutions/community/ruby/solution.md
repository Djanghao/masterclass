# [Ruby] DP, O(n)

**Author:** mistersky
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/solutions/1279967/](https://leetcode.com/problems/number-of-subarrays-with-bounded-maximum/solutions/1279967/)

---

```
# @param {Integer[]} nums
# @param {Integer} left
# @param {Integer} right
# @return {Integer}
def num_subarray_bounded_max(nums, left, right)
  dp = 0
  prev = -1
  result = 0
  
  nums.count.times do |i|
    num = nums[i]
    
    if num > right
      dp = 0
      prev = i
      next
    end
    
    dp = i - prev if left <= num
    
    result += dp
  end
  
  result
end
```