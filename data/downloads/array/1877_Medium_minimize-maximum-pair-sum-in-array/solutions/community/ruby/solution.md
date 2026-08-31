# Sorting

**Author:** pratik1707
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/solutions/4297058/](https://leetcode.com/problems/minimize-maximum-pair-sum-in-array/solutions/4297058/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(logn)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def min_pair_sum(nums)
    nums.sort!

    max = 0 

    i = 0 
    j = nums.length-1

    while(j > i) do 
        sum = nums[i] + nums[j]
        max = [sum, max].max 
        i += 1
        j -= 1 
    end 

    max 
end
```