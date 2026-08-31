# 🔥🔥 Beats 100% | 4 Approaches 🚀🚀 | Must Watch 😎

**Author:** The_Sanket_Deshmukh
**Votes:** 8
**Link:** [https://leetcode.com/problems/maximum-total-reward-using-operations-i/solutions/5283430/](https://leetcode.com/problems/maximum-total-reward-using-operations-i/solutions/5283430/)

---

### Intuition \uD83D\uDCDA\uD83D\uDCA1

The goal is to maximize the total reward by strategically choosing elements from the array, ensuring that the current reward value is greater than the total reward accumulated so far before adding it to the total.

### Recursive Approach (Without Memoization) \uD83C\uDF00\uD83D\uDD01

1. **Base Case**: If the index `i` is out of bounds, return 0.
2. **Choices**:
   - **Include**: If `arr[i]` is greater than `lastSum`, add `arr[i]` to the total and recursively call for the next index.
   - **Exclude**: Skip the current index and recursively call for the next index.
3. **Return**: The maximum of the include and exclude choices.

#### Time Complexity \u23F1\uFE0F
- **Exponential**: \\(O(2^n)\\) due to the two recursive calls for each element.

#### Space Complexity \uD83D\uDCBE
- **Recursive Call Stack**: \\(O(n)\\).

### Memoization Approach \uD83E\uDDE0\uD83D\uDCAD

1. **Memoization Table**: Use a 2D table `dp` to store results of subproblems.
2. **Check DP Table**: Return the stored result if already computed.
3. **Update DP Table**: Store the result before returning.

#### Time Complexity \u23F1\uFE0F
- **Polynomial**: \\(O(n * 4000)\\).

#### Space Complexity \uD83D\uDCBE
- **DP Table**: \\(O(n * 4000)\\).
- **Recursive Call Stack**: \\(O(n)\\).

### Tabulation Approach \uD83D\uDDC2\uFE0F\uD83D\uDCCA

1. **DP Table**: Use a 2D table `dp` to store results in a bottom-up manner.
2. **Iterate**: From the end of the array to the start.
3. **Update DP Table**: Based on include and exclude choices.

#### Time Complexity \u23F1\uFE0F
- **Polynomial**: \\(O(n * 4000)\\).

#### Space Complexity \uD83D\uDCBE
- **DP Table**: \\(O(n * 4000)\\).

### Space Optimized Approach \uD83D\uDE80\uD83D\uDD04

1. **Space Optimization**: Use only two 1D arrays to store current and next states.
2. **Iterate**: From the end of the array to the start.
3. **Update Arrays**: Based on include and exclude choices.

#### Time Complexity \u23F1\uFE0F
- **Polynomial**: \\(O(n * 4000)\\).

#### Space Complexity \uD83D\uDCBE
- **Optimized Space**: \\(O(4000)\\).

# Code
```
class Solution {
public:

    int maxTotalRewardRec(vector<int>& arr, int i, int lastSum)
    {
        if(i >= arr.size()) return 0;

        // Include
        int include = 0;
        if(arr[i] > lastSum)
        {
            include = arr[i] + maxTotalRewardRec(arr,i+1,lastSum + arr[i]);
        }
        // Exclude
        int exclude = 0 + maxTotalRewardRec(arr,i+1,lastSum);

        return max(include,exclude);
    }

    int maxTotalRewardMem(vector<int>& arr, int i, int lastSum, vector<vector<int>> &dp)
    {
        if(i >= arr.size()) return 0;
        if(dp[i][lastSum] != -1) return dp[i][lastSum];

        // Include
        int include = 0;
        if(arr[i] > lastSum)
        {
            include = arr[i] + maxTotalRewardMem(arr,i+1,lastSum + arr[i],dp);
        }
        // Exclude
        int exclude = 0 + maxTotalRewardMem(arr,i+1,lastSum,dp);

        return dp[i][lastSum] = max(include,exclude);
    }

    int maxTotalRewardTab(vector<int>& arr)
    {
        vector<vector<int>> dp(2001,vector<int>(4001,0));

        for(int i = arr.size()-1; i >= 0; i--)
        {
            for(int lastSum = 4000; lastSum >= 0; lastSum--)
            {
                int include = 0;
                if(arr[i] > lastSum)
                {
                    include = arr[i] + dp[i+1][lastSum+arr[i]];
                }
                // Exclude
                int exclude = 0 + dp[i+1][lastSum];

                dp[i][lastSum] = max(include,exclude);
            }
        }
        return dp[0][0];
    }

    int maxTotalRewardSO(vector<int>& arr)
    {
        vector<int> curr(4001,0);
        vector<int> next(4001,0);

        for(int i = arr.size()-1; i >= 0; i--)
        {
            for(int lastSum = 4000; lastSum >= 0; lastSum--)
            {
                int include = 0;
                if(arr[i] > lastSum)
                {
                    include = arr[i] + next[lastSum+arr[i]];
                }
                // Exclude
                int exclude = 0 + next[lastSum];

                curr[lastSum] = max(include,exclude);
            }
            next = curr;
        }
        return next[0];
    }

    int maxTotalReward(vector<int>& rewardValues) {
        sort(rewardValues.begin(),rewardValues.end());
        // 1. Recursion
        // return maxTotalRewardRec(rewardValues,0,0);

        // 2. Memoization
        // vector<vector<int>> dp(2000,vector<int>(4000,-1));
        // return maxTotalRewardMem(rewardValues,0,0,dp);

        // 3. Tabulation
        // return maxTotalRewardTab(rewardValues);

        // 4. Space Optimization
        return maxTotalRewardSO(rewardValues);
    }
};
```
![LC GIF.gif](./images/0.gif)
