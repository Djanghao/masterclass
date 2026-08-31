# Beats 100%. Compare to sorted array.

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/4432222/](https://leetcode.com/problems/shortest-unsorted-continuous-subarray/solutions/4432222/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n log n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# @param {Integer[]} nums
# @return {Integer}
def find_unsorted_subarray(nums)
    # Check if array is already in ascending order.
    sorted_nums = nums.sort

    l = 0
    r = nums.size - 1

    while l < nums.size
        if nums[l] != sorted_nums[l]
            break
        end

        l += 1
    end

    while r > -1
        if nums[r] != sorted_nums[r]
            break
        end
        
        r -= 1
    end


    if l == nums.size and r == -1
        return 0
    else
        return (r - l) + 1
    end
    
 
end
```