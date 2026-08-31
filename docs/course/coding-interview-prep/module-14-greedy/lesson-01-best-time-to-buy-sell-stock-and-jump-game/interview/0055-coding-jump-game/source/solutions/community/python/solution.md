# 1-6 lines, O(n) time, O(1) space

**Author:** StefanPochmann
**Votes:** 527
**Link:** [https://leetcode.com/problems/jump-game/solutions/20907/](https://leetcode.com/problems/jump-game/solutions/20907/)

---

**Solution 1**

Going forwards. `m` tells the maximum index we can reach so far.

    def canJump(self, nums):
        m = 0
        for i, n in enumerate(nums):
            if i > m:
                return False
            m = max(m, i+n)
        return True

**Solution 2**

One-liner version:

    def canJump(self, nums):
        return reduce(lambda m, (i, n): max(m, i+n) * (i <= m), enumerate(nums, 1), 1) > 0

**Solution 3**

Going backwards, most people seem to do that, here's my version.

    def canJump(self, nums):
        goal = len(nums) - 1
        for i in range(len(nums))[::-1]:
            if i + nums[i] >= goal:
                goal = i
        return not goal

**Solution 4**

C version.

    bool canJump(int* nums, int n) {
        int goal=n-1, i;
        for (i=n; i--;)
            if (i+nums[i] >= goal)
                goal=i;
        return !goal;
    }