# Ruby Solution. Easy to understand

**Author:** guswhitten
**Votes:** 1
**Link:** [https://leetcode.com/problems/left-and-right-sum-differences/solutions/3444475/](https://leetcode.com/problems/left-and-right-sum-differences/solutions/3444475/)

---

```
# @param {Integer[]} nums
# @return {Integer[]}
def left_rigth_difference(nums)
    answer = []
    n = nums.size - 1
    left_sum, right_sum = 0, 0
    
    # calculate left sum and push to answer array
    (0..n).each do |idx|
        answer << left_sum
        left_sum += nums[idx]
    end
    
    # calculate right sum and update each answer array value
    (0..n).each do |idx|
        answer[n - idx] = (answer[n - idx] - right_sum).abs
        right_sum += nums[n - idx]
    end
    
    answer
end
```