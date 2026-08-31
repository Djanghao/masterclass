# #binarysearch

**Author:** pratik1707
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/solutions/3908553/](https://leetcode.com/problems/minimum-absolute-difference-between-elements-with-constraint/solutions/3908553/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} nums
# @param {Integer} x
# @return {Integer}

def min_absolute_difference(nums, x)

    min_difference = Float::INFINITY
    n = nums.length
    nums.reverse!
    arr = []

    for i in (x...n) do 
        num = nums[i]        
        idx = arr.bsearch_index{|k| k > nums[i-x]} || arr.length
        arr.insert(idx, nums[i-x])
        idx2 = arr.bsearch_index{|k| k > num} || (arr.length)       
       
        min_difference = [min_difference, (num-arr[idx2]).abs].min if arr[idx2] != nil 
        min_difference = [min_difference, (num-arr[idx2-1]).abs].min 
    end 

    min_difference 
end

```