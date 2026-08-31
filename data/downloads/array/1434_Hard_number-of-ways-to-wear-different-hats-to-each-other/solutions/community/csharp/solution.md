# C# Dynamic Programming and Bitmasking Solution

**Author:** GetRid
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/solutions/5627893/](https://leetcode.com/problems/number-of-ways-to-wear-different-hats-to-each-other/solutions/5627893/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->This problem can be solved using dynamic programming and bitmasking. The main idea is to represent each possible state of assigned hats using a bitmask where each bit corresponds to whether a person has been assigned a hat or not.
___

# Approach
<!-- Describe your approach to solving the problem. -->//  MOD: We use a modulo operation to avoid overflow and ensure the result fits within the constraints.
//  DP Table: dp[hat, mask] stores the number of ways to assign hats up to the hat-th hat, considering 
//  the bitmask mask.
//  Transition: We transition the DP state by considering each person who might prefer the current hat
//  and hasn't been assigned any hat yet.
//  Final State: The final answer is found in dp[40, (1 << n) - 1], representing all people wearing hats.
___

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->O(40 * 2^n * n), where n is the number of people. We have 40 hats, and for each hat, we process all possible mask states and iterate over each person.
___

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->O(40 * 2^n) due to the DP table.
___

# Code
```
using System;
using System.Collections.Generic;

public class Solution {
    private const int MOD = 1000000007;
    
    public int NumberWays(IList<IList<int>> hats) {
        int n = hats.Count;
        int maxMask = (1 << n) - 1;
        int[,] dp = new int[41, 1 << n];
        dp[0, 0] = 1;
        
        // For each hat
        for (int hat = 1; hat <= 40; hat++) {
            // Copy previous state
            for (int mask = 0; mask <= maxMask; mask++) {
                dp[hat, mask] = dp[hat - 1, mask];
            }
            
            // Try to assign hat to each person
            for (int person = 0; person < n; person++) {
                if (hats[person].Contains(hat)) {
                    for (int mask = 0; mask <= maxMask; mask++) {
                        if ((mask & (1 << person)) == 0) {
                            dp[hat, mask | (1 << person)] += dp[hat - 1, mask];
                            dp[hat, mask | (1 << person)] %= MOD;
                        }
                    }
                }
            }
        }
        
        return dp[40, maxMask];
    }
}
```