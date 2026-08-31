# Beats 100.00%💯💯 Easy to understand 🔥🔥

**Author:** decoder2025
**Votes:** 6
**Link:** [https://leetcode.com/problems/maximum-sum-of-subsequence-with-non-adjacent-elements/solutions/5209928/](https://leetcode.com/problems/maximum-sum-of-subsequence-with-non-adjacent-elements/solutions/5209928/)

---

# Approach


---


#### **Initialization:**
**1. **Define Constants and Variables:****

* Set MOD to 1000000007 for handling large numbers.
* Initialize sum to 0 to accumulate the results of each query.
* Initialize a dp array of size n to store the maximum sum of non-adjacent subsequences ending at each index.

**2. **Compute Initial dp Array:****

dp[0] = Math.max(0, nums[0]): The maximum sum ending at the first element is either 0 (not choosing it) or nums[0].
If n > 1, dp[1] = Math.max(dp[0], nums[1]): For the second element, the maximum is either the sum ending at the first element or nums[1].
For each i from 2 to n-1, compute dp[i]:
dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]): Either exclude the current element or include it by adding it to the best sum ending two elements before.

---

- #### Process Queries:
**3. Iterate Over Each Query:**

* For each query [pos, value]:
     --> Update nums[pos] to value.

**4.  Recompute dp Array from Affected Position:**

* If pos == 0:
   -->  Recompute dp[0] = Math.max(0, nums[0]).
--> If n > 1, recompute dp[1] = Math.max(dp[0], nums[1]).
- If pos == 1:
Recompute dp[1] = Math.max(dp[0], nums[1]).

**5. Update Remaining dp Values:**

* For each i from Math.max(2, pos) to n-1, recompute dp[i]:
-->dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]).

**6.Update the Sum:**

Add the current maximum sum (dp[n-1]) to sum and take modulo MOD:
sum = (sum + dp[n - 1]) % MOD.

---

#### Return the Result:
**7. Return the Accumulated Sum**:
Return sum cast to an integer.
# Complexity
 - Time complexity: **O(Q*N)**,  where N is the length of the input array and Q is the number of queries.
- Space complexity: **O(N)**, primarily due to the dp array.

# Code
```
class Solution {
   private static final int MOD = 1000000007;

    public int maximumSumSubsequence(int[] nums, int[][] queries) {
         int n = nums.length;
        long sum = 0;
        long[] dp = new long[n];

        dp[0] = Math.max(0, nums[0]);
        if (n > 1) {
            dp[1] = Math.max(dp[0], nums[1]);
        }
        for (int i = 2; i < n; i++) {
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
        }

        for (int[] q : queries) {
            int pos = q[0];
            int value = q[1];
            nums[pos] = value;

            if (pos == 0) {
                dp[0] = Math.max(0, nums[0]);
                if (n > 1) {
                    dp[1] = Math.max(dp[0], nums[1]);
                }
            } else if (pos == 1) {
                dp[1] = Math.max(dp[0], nums[1]);
            }
            for (int i = Math.max(2, pos); i < n; i++) {
                dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
            }

            sum = (sum + dp[n - 1]) % MOD;
        }

        return (int) sum;
    }
}
```
![wkjfjeb.jpg](./images/0.jpeg)
