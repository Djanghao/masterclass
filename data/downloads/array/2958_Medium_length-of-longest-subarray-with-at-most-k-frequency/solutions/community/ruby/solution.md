# Sliding Window

**Author:** pratik1707
**Votes:** 2
**Link:** [https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/solutions/4388321/](https://leetcode.com/problems/length-of-longest-subarray-with-at-most-k-frequency/solutions/4388321/)

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
def max_subarray_length(nums, k)    
   uniq_hash = Hash.new(0)

   max_length = 0 

   i = 0 

   for j in (0...nums.length) do 
       uniq_hash[nums[j]] += 1       
        while(uniq_hash[nums[j]] > k) do 
            uniq_hash[nums[i]] -= 1
            i += 1
        end 
        max_length = [max_length, j-i+1].max   
   end 

   max_length 
end
```