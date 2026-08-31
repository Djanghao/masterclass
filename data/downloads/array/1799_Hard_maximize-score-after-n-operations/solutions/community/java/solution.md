# Java | BitMask + DP | Explaination

**Author:** cdhcs1516
**Votes:** 54
**Link:** [https://leetcode.com/problems/maximize-score-after-n-operations/solutions/1118875/](https://leetcode.com/problems/maximize-score-after-n-operations/solutions/1118875/)

---

Since n<=14, it is intuitively to use bitmask to traverse all cases. We can use bitmask to record the positions where the numbers are used. For example, 3 ->00000011, it means the first and second number are used.

Then we employ an array dp to record the maximum score where **dp[i]** represents the maximum score we can get by using those numbers correponding to the bitmask of **i**. Then **dp[(2^n-1]** indicates the final answer. 

Since each operation takes 2 numbers, so if the current bitcounts is odd, it can be skipped. 

The steps of the solution are as follows:
1. Compute all candidate GCD pairs, and record the bitmask and GCD value.
2. Traverse **i** from 0 to 2^n-1, check for each GCD pair. If the bitmask **k** of such GCD pair is overlapped with **i** (e.g., **i & k != 0**), it means at least one number of this pair is already used, skip it. Otherwise, update **dp[i^k] = Math.max(dp[i^k], dp[i] + GCD_value(k) * bitCounts(i) / 2 + 1)**. Here the **bitCounts(i) / 2** means the number of operations for bitmask **i**.

```
class Solution {
    public int maxScore(int[] nums) {
        int n = nums.length;
        Map<Integer, Integer> gcdVal = new HashMap<>();
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                gcdVal.put((1 << i) + (1 << j), gcd(nums[i], nums[j]));
            }
        }
        
        int[] dp = new int[1 << n];
        
        for (int i = 0; i < (1 << n); ++i) {
            int bits = Integer.bitCount(i); // how many numbers are used
            if (bits % 2 != 0) // odd numbers, skip it
                continue;
            for (int k : gcdVal.keySet()) {
                if ((k & i) != 0) // overlapping used numbers
                    continue;
                dp[i ^ k] = Math.max(dp[i ^ k], dp[i] + gcdVal.get(k) * (bits / 2 + 1));
            }
        }
        
        return dp[(1 << n) - 1];
    }
    
    public int gcd(int a, int b) {
        if (b == 0)   
            return a;     
        return gcd(b, a % b);   
    }
}

// Time: O(2^n * n^2)
// Space: O(2 ^ n)
```