# O(nk) DP with hashmap

**Author:** harning
**Votes:** 14
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-ii/solutions/5280443/](https://leetcode.com/problems/find-the-maximum-length-of-a-good-subsequence-ii/solutions/5280443/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

When we see a number, depending on if it's equal or different from numbers we've already seen, it can be appended to some good subseqs before, making longer subseqs.


# Approach
<!-- Describe your approach to solving the problem. -->

Let $dp(i, p)$ be the number of good subseqs, ending at index $i$, with $p$ or less unequal pairs of `seq[i] != seq[i + 1]`.

* base case: $dp(0, 0) = 1$. The zero-th number itself is a good subseq. with zero unequal pair
* recurrence relation:
    1. if $nums_i$ has been seen before as the ending element of some good subseqs, and we append it to those subseqs, then we can make longer subseqs with no additional unequal pair
        $dp(i, p) = \\max (dp(i, p), dp(num_i\	ext{'s previous presence index}, p) + 1)$
    1. if we append this new number to previous subseqs ending with a different number, we will end up with a longer subseq, but this time maybe with one more unequal pair
        $dp(i, p + 1) = \\max (dp(i, p + 1), \	ext{longest subseq. with }p\	ext{ unequal paris} + 1)$


# Complexity
- Time complexity: $O(nk)$


# Code

```cpp
class Solution {
public:
    int maximumLength(vector<int>& nums, int k) {
        int n = nums.size();

        // DP table, init. with all zeros
        vector<vector<int>> dp(n, vector<int>(k + 1, 0));

        // Hashmap to record the last appearance of each distinct number
        // Need this for transition 1.
        unordered_map<int, int> last_seen;

        // The length of longest subseq with k unequal pairs so far
        // Need this for transition 2.
        vector<int> longest_so_far(k + 1, 0);

        // Base case: zero-th number itself is a subseq. with zero unequal pairs
        dp[0][0] = 1;
        last_seen[nums[0]] = 0;
        longest_so_far[0] = 1;
        
        // Start with the first number
        for (int i = 1; i < n; i++) {
            dp[i][0] = 1;  // The number alone is always a subseq. with 0 unequal pair
            int max_possible_p = min(i, k);

            // 1. append this number to its previous presence
            if (last_seen.find(nums[i]) != last_seen.end()) {
                for (int p = 0; p <= max_possible_p; p++) {
                    dp[i][p] = max(dp[i][p], dp[last_seen[nums[i]]][p] + 1);
                }
            }
            last_seen[nums[i]] = i;
            
            // 2. append this number to previous different number
            for (int p = 0; p <= max_possible_p; p++) {
                if (p >= k) break;
                dp[i][p + 1] = max(dp[i][p + 1], longest_so_far[p] + 1);
            }
            
            for (int p = 0; p <= max_possible_p; p++) {
                longest_so_far[p] = max(longest_so_far[p], dp[i][p]);
            }
        }
        
        int ans = 1;
        for (int p = 0; p <= k; p++) {
            ans = max(ans, longest_so_far[p]);
        }
        return ans;
    }
};
```