# Java | TC: O(N) | SC: O(1) | Easy & Concise solution

**Author:** NarutoBaryonMode
**Votes:** 28
**Link:** [https://leetcode.com/problems/max-consecutive-ones/solutions/1507990/](https://leetcode.com/problems/max-consecutive-ones/solutions/1507990/)

---

```java
/**
 * Maintain current count and maximum count so far.
 *
 * Time Complexity: O(N)
 *
 * Space Complexity: O(1)
 *
 * N = Length of the input array
 */
class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        if (nums == null) {
            throw new IllegalArgumentException("Input array is null");
        }

        int curCount = 0;
        int maxCount = 0;

        for (int n : nums) {
            if (n == 1) {
                curCount++;
                maxCount = Math.max(maxCount, curCount);
            } else {
                curCount = 0;
            }
        }

        return maxCount;
    }
}
```

---

Solutions to other parts of Max Consecutive Ones question on LeetCode:
- [487. Max Consecutive Ones II](https://leetcode.com/problems/max-consecutive-ones-ii/discuss/1508045/Java-or-TC:-O(N)-or-SC:-O(1)-or-Four-solutions-with-Follow-up-handled)
- [1004. Max Consecutive Ones III](https://leetcode.com/problems/max-consecutive-ones-iii/discuss/1508044/Java-or-TC:-O(N)-or-SC:-O(1)-or-One-Pass-Optimized-Sliding-Window)
