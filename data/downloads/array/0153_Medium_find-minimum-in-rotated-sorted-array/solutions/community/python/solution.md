# 1-2 lines Ruby/Python

**Author:** StefanPochmann
**Votes:** 34
**Link:** [https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/48491/](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/48491/)

---

Use binary search to find the first number that's less than or equal to the last.

---

**Ruby**

Direct translation of the above sentence into Ruby.

    def find_min(nums)
      nums.bsearch { |num| num <= nums.last }
    end

---

**Python**

A little hack.

    class Solution:
        def findMin(self, nums):
            self.__getitem__ = lambda i: nums[i] <= nums[-1]
            return nums[bisect.bisect(self, False, 0, len(nums))]