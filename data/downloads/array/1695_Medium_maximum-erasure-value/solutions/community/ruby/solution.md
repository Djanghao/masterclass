# Sliding Window + Hash O(n), O(n)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-erasure-value/solutions/5378690/](https://leetcode.com/problems/maximum-erasure-value/solutions/5378690/)

---


# Code
```
# @param {Integer[]} nums
# @return {Integer}
def maximum_unique_subarray(nums)
    hash = {}
    l = 0
    r = 1    
    hash[nums[l]] = true
    current_sum = nums[l]
    sum = nums[l]
    while r < nums.size
        if hash[nums[r]] 
            while l < r
                val = nums[l]
                current_sum -= val
                hash.delete val
                l += 1
                if val == nums[r]
                    break
                end
            end
        end

        hash[nums[r]] = true
        current_sum += nums[r]

        sum = [sum, current_sum].max
        r += 1
    end

    sum
end
```