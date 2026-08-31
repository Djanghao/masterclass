# Java Top Down DP

**Author:** RobertSkonieczny
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-subsequences-with-odd-sum/solutions/6059048/](https://leetcode.com/problems/number-of-subsequences-with-odd-sum/solutions/6059048/)

---

# Code
```java []
class Solution {
    private int[][] memo;
    public int subsequenceCount(int[] nums) {
        this.memo = new int[nums.length][2];
        for (int[] row : memo) Arrays.fill(row, -1);
        return dp(nums, 0, 0);
    }

    private int dp(int[] nums, int i, int mod) {
        if (i >= nums.length) {
            return mod % 2 == 1 ? 1 : 0;
        }

        if (memo[i][mod] != -1) {
            return memo[i][mod];
        }

        int ways = dp(nums, i + 1, mod);
        ways %= 1000000007;
        ways += dp(nums, i + 1, (mod + nums[i]) % 2);
        ways %= 1000000007;

        return memo[i][mod] = ways;

    }
}
```