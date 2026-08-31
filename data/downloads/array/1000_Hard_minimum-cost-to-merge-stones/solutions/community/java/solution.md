# Hard DP problem explained in clean and commented Java code

**Author:** th1nkgeek
**Votes:** 18
**Link:** [https://leetcode.com/problems/minimum-cost-to-merge-stones/solutions/1160631/](https://leetcode.com/problems/minimum-cost-to-merge-stones/solutions/1160631/)

---

This DP problem is hard because our optimization needs to consider several parameters, and that we have solution bound close to cubic complexity, which is probably as good as we are going to get.
I read a few posts but did not see a clear explanation of intuition, and optimal solution together in one post. Also, did not find a good solution in Java.

For me, the first half of [this post](https://leetcode.com/problems/minimum-cost-to-merge-stones/discuss/247657/JAVA-Bottom-Up-%2B-Top-Down-DP-With-Explaination) really helped in grasping a key concept.

This problem has at least **5 key intuitions**, and **ALL** are important to come up with the correct solution. I would say it is likely not possible for me to come up with a solution during an interview without practice. But once the key intuitions are internalized. same can be used in this and other related hard DP problems. I added the intuitions in-line with the code. 

The code below runs with O(N^3/K) time complexity and O(N^2) space complexity.
There are three loops below, and the innermost look has an increment interval of K, and this approximately explains the upper bound. There must be a better mathematical explanation, and suggest fellow leetcoders to suggest one :)
Space complexity is fairly simple, and bound by the size of the dp array.

```
class Solution {
    public int mergeStones(int[] stones, int K) {
        final int LEN = stones.length;
        int[][] dp = new int[LEN + 1][LEN + 1];
        int[] prefixSum = new int[LEN + 1];
        
        // Intuition: Every time we merge K stones, we are left with 1 stone
        // In other words, LEN reduces by (K - 1) stones
        // We also know that finally we will be left with 1 stone
        // If we generalize the principle for 'x' merges:
        // LEN - x*(K - 1) = 1 => (LEN - 1) = x*(K - 1) => (LEN - 1) % (K - 1) = 0
        // This principle is also used below to check if the current length
        // under consideration is a valid combination given K
        if ((LEN - 1) % (K - 1) != 0) {
            return -1;
        }
        
        // Prefix sum helps us to quickly determine sum of elements
        // i..j (0 <= i < j < LEN)
        for (int index = 0; index < LEN; index++) {
            prefixSum[index + 1] = prefixSum[index] + stones[index];
        }
        
        // k represents current size of subproblem under consideration
        // Key intuition: The trick here is, k NEED NOT be a multiple of K, but 'm' (see code below) needs
        // to be a multiple of K
        // However, we still need to ensure k >= K so that "m" can satisfy the constraint of the problem
        for (int k = K; k <= LEN; k++) { 
            // i represents the start index of the pile under consideration
            for (int i = 0; i <= LEN - k; i++) { 
                // size of the pile determines end index of the pile given the start index
                int j = i + k -1; 
                // Assign max cost before optimizing
                dp[i][j] = Integer.MAX_VALUE;
                // Key intuition: m always needs to increase in quantum of K.
                // Also to note, if we need a pile of size K, then
                // m needs to increase by K - 1, since beginning and end index together will
                // contribute "1" in the sum!
                for (int m = i; m < j; m += K - 1) {
                    // Critical intuition: Cost of merging given pile is really
                    // Cost of arriving at two sub-pies making up the given pile PLUS
                    // the sum of all elements of the given pile
                    // HOWEVER, the latter sum should only be done when the given pile
                    // follows the constraints of a 'move' - please see below
                    dp[i][j] = Math.min(dp[i][j], dp[i][m] + dp[m + 1][j]);
                }
                // At this point, we have optimized dp[i][j] for all values of m
                // Key intuition: at this point, we need to check if the size
                // of the pile adheres to key principle of a "move" (= K).
                // If we do not do this, then the sum will not be optimal!
                if ((j - i) % (K - 1) == 0) {
                    dp[i][j] += prefixSum[j + 1] - prefixSum[i];
                }
            }
        }
        return dp[0][LEN - 1];
    }
}
```
Footnote: This is a hard problem no doubt. But that's why we should practice such problems beforehand in case we get unlucky and are asked such problems during interview!