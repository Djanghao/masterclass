# Simple Solution, O(n), O(n)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/solutions/5369564/](https://leetcode.com/problems/maximum-sum-of-almost-unique-subarray/solutions/5369564/)

---


# Code
```
# @param {Integer[]} nums
# @param {Integer} m
# @param {Integer} k
# @return {Integer}
def max_sum(nums, m, k)
    # No need to do anything if k is 1, we
    # return max of nums.
    if k == 1
        return nums.max
    end

    # Setup our sliding window and our hash with the first
    # value of nums.
    # Also setup current_sum to be first val of nums.
    max = 0
    hash = {}
    hash[nums[0]] = 1
    current_sum = nums[0]
    l = 0
    r = 1
    while r < nums.size
        current_sum += nums[r]
        if hash[nums[r]]
            hash[nums[r]] += 1
        else
            hash[nums[r]] = 1
        end
        
        while r - l + 1 > k
            current_sum -= nums[l]
            if hash[nums[l]] == 1
                hash.delete nums[l]
            else
                hash[nums[l]] -= 1
            end
            l += 1
        end

        if hash.size >= m and (r - l + 1) == k
            max = [current_sum, max].max
        end

        r += 1
    end
    
    max
end
```