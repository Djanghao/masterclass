# Python short in-place solution with comments.

**Author:** OldCodingFarmer
**Votes:** 285
**Link:** [https://leetcode.com/problems/move-zeroes/solutions/72012/](https://leetcode.com/problems/move-zeroes/solutions/72012/)

---

    
    # in-place
    def moveZeroes(self, nums):
        zero = 0  # records the position of "0"
        for i in xrange(len(nums)):
            if nums[i] != 0:
                nums[i], nums[zero] = nums[zero], nums[i]
                zero += 1