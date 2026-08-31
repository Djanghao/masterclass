# Java Top Down Memoization

**Author:** RobertSkonieczny
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-subarrays-in-a-valid-split/solutions/5771610/](https://leetcode.com/problems/minimum-subarrays-in-a-valid-split/solutions/5771610/)

---

```
class Solution {
    private int[] memo;
    public int validSubarraySplit(int[] nums) {
        this.memo = new int[nums.length];
        Arrays.fill(memo, -1);
        int splits = dp(nums, 0);
        if (splits == Integer.MAX_VALUE) return -1;
        return splits;
    }

    private int dp(int[] nums, int i) {
        if (i >= nums.length) {
            return 0;
        }
        if (memo[i] != -1) {
            return memo[i];
        }
        int min = Integer.MAX_VALUE;
        for (int j = i;j < nums.length;j++) {
            if (gcd(nums[i], nums[j]) > 1) {
                int doSplit = dp(nums, j + 1);
                if (doSplit != Integer.MAX_VALUE) {
                    min = Math.min(min, doSplit + 1);
                }
            }
        }

        return memo[i] = min;
    }

    public static int gcd(int n1, int n2) {
        if (n2 == 0) {
            return n1;
        }
        return gcd(n2, n1 % n2);
    }
}
```