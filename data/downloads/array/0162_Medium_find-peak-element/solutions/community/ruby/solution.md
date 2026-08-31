# Binary Search Ruby solution

**Author:** ksodha93
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-peak-element/solutions/4255471/](https://leetcode.com/problems/find-peak-element/solutions/4255471/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(logn)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1)

# Code
```
# @param {Integer[]} nums
# @return {Integer}
def find_peak_element(nums)
    n = nums.length

    left = 0
    right = n - 1

    while left <= right
        mid = (left + right) / 2

        # left neighbor is greater
        if mid > 0 && nums[mid] < nums[mid - 1]  
            right = mid - 1
        elsif mid < n - 1 && nums[mid] < nums[mid + 1] # right neighbor is greater
            left = mid + 1
        else
            return mid
        end
    end
end
```