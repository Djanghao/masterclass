# Ruby Solution. Easy to understand

**Author:** guswhitten
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-subarrays-with-score-less-than-k/solutions/3172422/](https://leetcode.com/problems/count-subarrays-with-score-less-than-k/solutions/3172422/)

---

```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def count_subarrays(nums, k)
    ans, l, sum = 0, 0, 0

    (0...nums.size).each do |r|
        sum += nums[r]

        while sum*(r - l + 1) >= k
            sum -= nums[l]
            l += 1
        end
        
        ans += (r - l + 1)
    end
    
    ans
end
```