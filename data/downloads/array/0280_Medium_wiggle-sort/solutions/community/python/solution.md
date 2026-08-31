# 2 lines neat Python

**Author:** StefanPochmann
**Votes:** 59
**Link:** [https://leetcode.com/problems/wiggle-sort/solutions/71687/](https://leetcode.com/problems/wiggle-sort/solutions/71687/)

---

    def wiggleSort(self, nums):
        for i in range(len(nums)):
            nums[i:i+2] = sorted(nums[i:i+2], reverse=i%2)