# Python binary search solution - O(logn) - 48ms

**Author:** Google
**Votes:** 363
**Link:** [https://leetcode.com/problems/search-in-rotated-sorted-array/solutions/14437/](https://leetcode.com/problems/search-in-rotated-sorted-array/solutions/14437/)

---

    class Solution:
        # @param {integer[]} numss
        # @param {integer} target
        # @return {integer}
        def search(self, nums, target):
            if not nums:
                return -1
    
            low, high = 0, len(nums) - 1
    
            while low <= high:
                mid = (low + high) / 2
                if target == nums[mid]:
                    return mid
    
                if nums[low] <= nums[mid]:
                    if nums[low] <= target <= nums[mid]:
                        high = mid - 1
                    else:
                        low = mid + 1
                else:
                    if nums[mid] <= target <= nums[high]:
                        low = mid + 1
                    else:
                        high = mid - 1
    
            return -1