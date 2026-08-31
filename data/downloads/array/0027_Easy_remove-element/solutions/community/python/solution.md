# 6-line Python solution, 48 ms

**Author:** kitt
**Votes:** 360
**Link:** [https://leetcode.com/problems/remove-element/solutions/12584/](https://leetcode.com/problems/remove-element/solutions/12584/)

---

    def removeElement(self, nums, val):
        i = 0
        for x in nums:
            if x != val:
                nums[i] = x
                i += 1
        return i