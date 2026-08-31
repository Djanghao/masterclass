# Ruby solution

**Author:** tataruty
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/solutions/2623855/](https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/solutions/2623855/)

---

```
# @param {Integer[]} nums
# @param {Integer} x
# @return {Integer}
def min_operations(nums, x)
    target = nums.sum - x
   
    if target == 0
        return nums.length
    end
    
    left = 0
    right = 0
    curr = 0
    cnt = 0
    
    while right < nums.length
        curr += nums[right]
        
        while left < right && curr > target
            curr -= nums[left]
            left += 1
        end
        
        if curr == target
            cnt = [cnt, right - left + 1].max
        end
        
        right += 1
        
    end
    
    cnt == 0 ? -1 : nums.length - cnt   
end
```