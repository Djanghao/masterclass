# Simple Solution

**Author:** Chris1337
**Votes:** 0
**Link:** [https://leetcode.com/problems/smallest-range-i/solutions/4805115/](https://leetcode.com/problems/smallest-range-i/solutions/4805115/)

---


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)
# Code
```
# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer}
def smallest_range_i(nums, k)
    max = nums.max
    min = nums.min
    if k == 0
        return max-min
    end



    ans = (max -k ) - (min + k)
    if ans < 0
        return 0
    else
        return ans
    end
    
end
```