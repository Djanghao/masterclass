# [Python,Java] Elegant & Short | Prefix & Suffix sum

**Author:** Kyrylo-Ktl
**Votes:** 2
**Link:** [https://leetcode.com/problems/make-array-elements-equal-to-zero/solutions/6113188/](https://leetcode.com/problems/make-array-elements-equal-to-zero/solutions/6113188/)

---

# Complexity
- Time complexity: $$O(n)$$
- Space complexity: $$O(n)$$

# Code
```python3 []
class Solution:
    def countValidSelections(self, nums: list[int]) -> int:
        n = len(nums)
        selections = 0

        prefix_sum = [0] * n
        suffix_sum = [0] * n
        
        # Build prefix sums
        for i in range(1, n):
            prefix_sum[i] = prefix_sum[i - 1] + nums[i - 1]

        # Build suffix sums
        for i in reversed(range(n - 1)):
            suffix_sum[i] = suffix_sum[i + 1] + nums[i + 1]

        for i, num in enumerate(nums):
            if num != 0:
                continue

            # Both sides will be zero at the same time
            if prefix_sum[i] == suffix_sum[i]:
                selections += 2

            # Only one side will be zero at the end
            if abs(prefix_sum[i] - suffix_sum[i]) == 1:
                selections += 1

        return selections

```
```java []
class Solution {
    public int countValidSelections(int[] nums) {
        int n = nums.length;
        int selections = 0;

        int[] prefixSum = new int[n];
        int[] suffixSum = new int[n];

        // Build prefix sums
        for (int i = 1; i < n; ++i)
            prefixSum[i] = prefixSum[i - 1] + nums[i - 1];

        // Build suffix sums
        for (int i = n - 2; i >= 0; --i)
            suffixSum[i] = suffixSum[i + 1] + nums[i + 1];

        for (int i = 0; i < n; ++i) {
            if (nums[i] != 0)
                continue;

            // Both sides equal zero at the same time
            if (prefixSum[i] == suffixSum[i])
                selections += 2;

            // Only one side equals zero at the end
            if (Math.abs(prefixSum[i] - suffixSum[i]) == 1)
                selections += 1;
        }

        return selections;
    }
}
```