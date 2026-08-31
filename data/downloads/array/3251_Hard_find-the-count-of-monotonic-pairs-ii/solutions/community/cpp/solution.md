# Steps by steps, from problem I to problem II, O(n*m^2) -> O(n*m)

**Author:** jerry5841314
**Votes:** 33
**Link:** [https://leetcode.com/problems/find-the-count-of-monotonic-pairs-ii/solutions/5619420/](https://leetcode.com/problems/find-the-count-of-monotonic-pairs-ii/solutions/5619420/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1. problem I: You see that it has to cnt # of ways & the condition is to based on previous situation. So, it must be "DP" problem. 
2. Problem II: After you finish the problem I, how can you simplify your calculation after rearrange your formula?

# Approach
<!-- Describe your approach to solving the problem. -->
First bear in mind there are 3 conditions:
- arr1[0] <= arr1[1] <= ... <= arr1[n - 1]
- arr2[0] >= arr2[1] >= ... >= arr2[n - 1]
- arr1[i] + arr2[i] == nums[i]

Then, now we can think the solution
1. there are n grid (n <= 2000), for each grid it can have m cases(m = 50 in problem I), that is, you can fill i-th grid for arr1 with 0 to nums[i] (condition 3). Thus, your dp table would be n x m, first for the position i and second for the number j you want to fill in that grid of arr1. Now think of what you should consider for each entry (i, j) in the table? If you give arr1[i] = j and give arr2[i] = nums[i] - j, then arr1[i-1] <= j (condition 1) and arr2[i-1] = nums[i-1] - arr1[i-1] >= nums[i] - j. So we must consider different value of arr[i-1] as k. Now you can go for the code.
2. we know for j 
`code`     k <= j && nums[i - 1] - k >= nums[i] - j (problem I)
 `code`    k < = min(j, j -(nums[i] - nums[i-1]))  (rearrange)
for j + 1, the k we should consider is
`code` k' < = min(j+1, j+1 -(nums[i] - nums[i-1]))  
You'll find that there is at most one more grid you have to consider from j to j + 1. So you can simplify the loop for k
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
1. O(n*m^2) for problem I
2. O(n*m) for problem II
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int MOD = 1e9 + 7;

    int countOfPairs(vector<int>& nums) {
        int n = nums.size();
        vector<int> arr1(n);
        vector<int> arr2(n);
        vector<vector<int>> dp(n, vector<int>(1001, 0));
        for (int j = 0; j <= nums[0]; j++)
            dp[0][j] = 1;
        for (int i = 1; i < n; i++){
            int ways = 0;
            int k = 0;
            for (int j = 0; j <= nums[i]; j++){
                // problem I
                // for (int j = 0; j <= nums[i]; j++){
                //     int ways = 0;
                //     for (int k = 0; k <= 50; k++){
                //         if (k <= j && nums[i - 1] - k >= nums[i] - j)
                //             ways = (ways + dp[i - 1][k]) % MOD;
                //     }
                //     dp[i][j] = ways;
                // }
                // problem II
                if (k <= min(j, j - (nums[i] - nums[i - 1]))){
                    ways = (ways + dp[i - 1][k]) % MOD;
                    k++;
                }
                dp[i][j] = ways;
            }
        }
        int res = 0;
        for (int i = 0; i <= 1000; i++)
            res = (res + dp[n - 1][i]) % MOD;
        return res;
    }
};
```