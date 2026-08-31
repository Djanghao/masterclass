# Clean python solution

**Author:** hxuanz
**Votes:** 118
**Link:** [https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/solutions/48908/](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/solutions/48908/)

---

Find Minimum in Rotated Sorted Array I----**no duplicate** ----O(logN)

    class Solution(object):
    def findMin(self, nums):
        lo, hi = 0, len(nums) - 1
        while lo < hi:
            mid = lo + (hi -lo) / 2
            if nums[mid] > nums[hi]:
                lo = mid + 1
            else:
                hi = mid
        return nums[lo] 

Find Minimum in Rotated Sorted Array II----**contain duplicates**----O(logN)~O(N)

    class Solution(object):
    def findMin(self, nums):
        lo, hi = 0, len(nums) - 1
        while lo < hi:
            mid = lo + (hi -lo) / 2
            if nums[mid] > nums[hi]:
                lo = mid + 1
            else:
                hi = mid if nums[hi] != nums[mid] else hi - 1
        return nums[lo]