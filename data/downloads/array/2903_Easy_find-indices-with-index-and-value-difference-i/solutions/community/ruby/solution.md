# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/4748374/](https://leetcode.com/problems/find-indices-with-index-and-value-difference-i/solutions/4748374/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n^2)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(n)
# Code
```
# @param {Integer[]} nums
# @param {Integer} index_difference
# @param {Integer} value_difference
# @return {Integer[]}
def find_indices(nums, index_difference, value_difference)
    
    i = 0
    while i < nums.size
        j = i + index_difference
        while j < nums.size
            if ((nums[i] - nums[j]).abs >= value_difference)
                return [i, j]
            end
            j += 1
        end
        i += 1
    end

    [-1, -1] 
end
```