# 💥💥 Beats 100% on runtime and memory [EXPLAINED]

**Author:** r9n
**Votes:** 0
**Link:** [https://leetcode.com/problems/choose-numbers-from-two-arrays-in-range/solutions/6017371/](https://leetcode.com/problems/choose-numbers-from-two-arrays-in-range/solutions/6017371/)

---

# Intuition
We are given two arrays, nums1 and nums2, and our goal is to count the number of subranges (continuous segments) where, for each index in the range, we can pick an element from either nums1 or nums2, such that the sum of the picked elements from nums1 equals the sum of the picked elements from nums2. To do this, we track how the sum changes as we move through the arrays, and check when they balance out.

# Approach
Use dynamic programming with a hashmap (or dictionary) to keep track of the current sums while iterating through the arrays. For each element, we update possible new sums and count how many times the sum becomes zero, which indicates a balanced range. At each step, we add up all the possible ways we can form a balanced range from the previous sums.

# Complexity
- Time complexity:
 O(n * m), where n is the length of the arrays and m is the number of different sum values that might appear in the hashmap (which typically is smaller than n in practice).

- Space complexity:
O(n * m), for storing the possible sums in the hashmap.

# Code
```csharp []
public class Solution {
    public int CountSubranges(int[] nums1, int[] nums2) {
        const int MOD = 1000000007;
        int n = nums1.Length;
        long res = 0;

        // Dictionary to store the current count of subranges for a given sum (key)
        Dictionary<int, long> dp = new Dictionary<int, long>();

        for (int i = 0; i < n; ++i) {
            // Temporary dictionary for the current iteration
            Dictionary<int, long> newDp = new Dictionary<int, long>();

            // Add the starting values for the current subrange
            newDp[nums1[i]] = (newDp.ContainsKey(nums1[i]) ? newDp[nums1[i]] : 0) + 1;
            newDp[-nums2[i]] = (newDp.ContainsKey(-nums2[i]) ? newDp[-nums2[i]] : 0) + 1;

            // Add the values from the previous subranges
            foreach (var pair in dp) {
                int oldVal = pair.Key;
                long oldCount = pair.Value;

                // Calculate the new values for the subrange and update newDp
                newDp[oldVal + nums1[i]] = (newDp.ContainsKey(oldVal + nums1[i]) ? newDp[oldVal + nums1[i]] : 0) + oldCount;
                newDp[oldVal - nums2[i]] = (newDp.ContainsKey(oldVal - nums2[i]) ? newDp[oldVal - nums2[i]] : 0) + oldCount;

                // Apply modulo to prevent overflow
                newDp[oldVal + nums1[i]] %= MOD;
                newDp[oldVal - nums2[i]] %= MOD;
            }

            // Move newDp to dp
            dp = newDp;

            // Check if there are any subranges that sum to zero
            if (dp.ContainsKey(0)) {
                res += dp[0];
            }

            // Apply modulo to prevent overflow
            res %= MOD;
        }

        // Return the result modulo MOD
        return (int)res;
    }
}

```