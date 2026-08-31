# Prefix sum , HashMap

**Author:** pratik1707
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-good-subarray-sum/solutions/4723392/](https://leetcode.com/problems/maximum-good-subarray-sum/solutions/4723392/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def maximum_subarray_sum(nums, k)    
    max = -Float::INFINITY
    min = Float::INFINITY
    n = nums.length 
    prefix_sum = Array.new(n+1, 0)
    nums_hash = Hash.new
    
    for i in (0...n) do 
        prefix_sum[i+1] = prefix_sum[i] + nums[i]        
    end 

    p prefix_sum

    for i in (0...n) do 
        num = nums[i]
        if nums_hash.has_key?(num+k)
            
            max = [max, prefix_sum[i+1]- nums_hash[num+k] ].max            
        end 

        if nums_hash.has_key?(num-k)            
            max = [max, prefix_sum[i+1]- nums_hash[num-k] ].max      
        end 

        if nums_hash.has_key?(num)
            nums_hash[num] = [prefix_sum[i], nums_hash[num]].min 
        else
            nums_hash[num] = prefix_sum[i]
        end 
    end 
    
    max == -Float::INFINITY ? 0 : max 
end

```