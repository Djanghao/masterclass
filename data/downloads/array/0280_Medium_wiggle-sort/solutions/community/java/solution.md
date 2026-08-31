# Java/Python O(n) time O(1) space solution 3+ lines

**Author:** dietpepsi
**Votes:** 21
**Link:** [https://leetcode.com/problems/wiggle-sort/solutions/71747/](https://leetcode.com/problems/wiggle-sort/solutions/71747/)

---

**Python**

    class Solution(object):
        def wiggleSort(self, nums):
            for i in xrange(1, len(nums)):
                if (i % 2) ^ (nums[i] > nums[i - 1]):
                    nums[i], nums[i - 1] = nums[i - 1], nums[i]


    # 125 / 125 test cases passed.
    # Status: Accepted
    # Runtime: 80 ms

**Java**

    public void wiggleSort(int[] nums) {
        for (int i = 1; i < nums.length; ++i) {
            if ((i % 2 == 1) != (nums[i] > nums[i - 1])) {
                int cache = nums[i];
                nums[i] = nums[i-1];
                nums[i-1] = cache;
            }
        }
    }

    // 125 / 125 test cases passed.
    // Status: Accepted
    // Runtime: 1 ms