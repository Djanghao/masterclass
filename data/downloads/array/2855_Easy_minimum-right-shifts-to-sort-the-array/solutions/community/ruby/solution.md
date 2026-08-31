# O(n), O(1)

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/5302022/](https://leetcode.com/problems/minimum-right-shifts-to-sort-the-array/solutions/5302022/)

---


# Code
```
# @param {Integer[]} nums
# @return {Integer}
def minimum_right_shifts(nums)
    n = nums.size
    if n == 1
        return 0
    end

    set_1_start = 0
    set_1_end = nil
    set_2_start = nil
    set_2_end = nil
   
    if nums[1] < nums[0]
        i = 0
        set_1_end = 1
    else
         i = 1
        while i + 1 < n and nums[i] < nums[i + 1]  
            i += 1
        end 
    end

    if i + 1 == n
        return 0
    else
        set_1_end = i
    end

    i += 1
    set_2_start = i
    while i + 1 < n and nums[i] < nums[i + 1]  
        i += 1
    end 

    set_2_end = i

    # Check if its impossible to rotate array in a sorted manner.
    if nums[set_2_end] > nums[set_1_end] || set_2_end < n - 1 || nums[set_1_start] < nums[set_2_end]
        return -1
    end
    set_2_end - set_1_end

end
```