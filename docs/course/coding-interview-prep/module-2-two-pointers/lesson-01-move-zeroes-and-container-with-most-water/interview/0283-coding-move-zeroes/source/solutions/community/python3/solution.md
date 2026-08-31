# Two pointers technique (Python, O(n) time / O(1) space)

**Author:** _Maximus_
**Votes:** 875
**Link:** [https://leetcode.com/problems/move-zeroes/solutions/562911/](https://leetcode.com/problems/move-zeroes/solutions/562911/)

---

Hi there! Here is my solution to this problem that uses two pointers technique.

**Code:**
```
class Solution:
    def moveZeroes(self, nums: list) -> None:
        slow = 0
        for fast in range(len(nums)):
            if nums[fast] != 0 and nums[slow] == 0:
                nums[slow], nums[fast] = nums[fast], nums[slow]

            # wait while we find a non-zero element to
            # swap with you
            if nums[slow] != 0:
                slow += 1
```

**Algorithm complexity:**
*Time complexity: O(n)*. Our fast pointer does not visit the same spot twice.
*Space complexity: O(1)*. All operations are made in-place

If you like my solution, I will really appreciate your upvoting. It will help other python-developers to find it faster. And as always, I wish you an enjoyable time on LeetCode.

**Special thanks for the next comments:**
[**stanley98745**](https://leetcode.com/problems/move-zeroes/discuss/562911/two-pointers-technique-python-on-time-o1-space/513985)