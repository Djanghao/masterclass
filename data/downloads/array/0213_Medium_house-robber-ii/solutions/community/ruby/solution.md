# Ruby, bottom-up, DP, O(n)

**Author:** blither
**Votes:** 2
**Link:** [https://leetcode.com/problems/house-robber-ii/solutions/2265417/](https://leetcode.com/problems/house-robber-ii/solutions/2265417/)

---

If you've solved [house robber](https://leetcode.com/problems/house-robber/), this is the same problem with a few extra lines of code. To account for the houses being in a circle, we can call our original house-robber function twice.

If we have houses [1,2,3,4], then we want to check the arrays [1,2,3] and [2,3,4]. We can bring in our original function from the prior house robber problem and pass in these arrays, grabbing the max value at the end.

```
def rob(nums)
    return nums[0] if nums.size == 1
    return [nums[0], nums[1]].max if nums.size == 2
    
    [rob_original(nums[0...nums.size-1]).last, rob_original(nums[1...nums.size]).last].max
end

def rob_original(nums)
    return nums[0] if nums.size == 1
    
    sums = [nums[0], [nums[0], nums[1]].max]
    (2...nums.size).each do |i|
        sums << [sums[i-2]+nums[i], sums[i-1]].max
    end
    sums
end
```