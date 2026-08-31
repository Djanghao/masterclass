# Ruby solution with hashes ( a lot of memory )

**Author:** non__
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-average-difference/solutions/2903676/](https://leetcode.com/problems/minimum-average-difference/solutions/2903676/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Use hash to store values, not so good approach, because we need to have a lot of memory for this solution :(

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def minimum_average_difference(nums)
    tmp_hashs = []
    sum = 0
    nums_size = nums.size
    result_index = 0
    min_avg_diff = Float::INFINITY
    nums.each_with_index do |val, index|
        sum += val
        divider = index + 1
        tmp_hashs << {cur: val, val: sum/divider}
        
    end
    tmp_hashs.each_with_index do |val, index|
        sum = sum - val[:cur]
        nums_size -= 1
        nums_size = 1 if nums_size == 0
        current_v = (val[:val] - (sum / nums_size)).abs
        if(current_v < min_avg_diff)
            result_index = index
            min_avg_diff = current_v
        end
    end
    
    result_index
end
```