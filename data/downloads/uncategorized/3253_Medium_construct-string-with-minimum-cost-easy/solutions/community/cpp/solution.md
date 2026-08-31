# C++ DP SOLUTION

**Author:** user6379Jq
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-string-with-minimum-cost-easy/solutions/5671819/](https://leetcode.com/problems/construct-string-with-minimum-cost-easy/solutions/5671819/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    int minimumCost(string target, vector<string>& words, vector<int>& costs) {
        // use dp to construct words... stop if match, reset minCost every time u find a way to construct the target words with a lesser cost.

        int n = target.size();
        vector<int> dp (n + 1, INT_MAX);

        dp[0] = 0;

        for (int i = 0; i < n; i++) {
            if (dp[i] == INT_MAX) continue;
            for (int j = 0; j < words.size(); j++) {
                auto word = words[j];
                auto cost = costs[j];
                int wordlen = word.size();

                if (i + wordlen <= n && target.substr(i, wordlen) == word) {
                    dp[i + wordlen] = min(dp[i + wordlen], dp[i] + cost);
                }
            }
        }


        return dp[n] == INT_MAX ? -1 : dp[n];

    }
};
```